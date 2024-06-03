import { Inject, Injectable } from '@nestjs/common';
import { UnauthorizedException } from '@nestjs/common/exceptions';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import * as admin from 'firebase-admin';
import * as Crypto from 'crypto';
import { CONSTANTS } from 'src/database/constants';
import { Person } from 'src/person/entities/person.entity';
import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';
import { JwtPayload } from '../types';

@Injectable()
export class AuthService {
  private static readonly encoding = 'hex' as const;
  private cryptoSecret: string;

  public constructor(
    @Inject(JwtService)
    private readonly jwtService: JwtService,
    @Inject(CONSTANTS.REPOSITORY.PERSON)
    private readonly personRepository: Repository<Person>,
    @Inject(CONSTANTS.REPOSITORY.USER)
    private readonly userRepository: Repository<User>,
    private readonly configService: ConfigService,
  ) {
    this.cryptoSecret = this.configService.getOrThrow<string>('CRYPTO_SECRET');

    const firebaseCredentials = this.configService.get<string>(
      'FIREBASE_ADMIN_CREDENTIALS_JWT',
    );

    if (firebaseCredentials) {
      const credentials = jwtService.decode(firebaseCredentials);
      admin.initializeApp({
        credential: admin.credential.cert(credentials),
      });
    } else {
      throw new Error('Firebase Admin credentials are not defined');
    }
  }

  public async verifyToken(token: string): Promise<JwtPayload> {
    try {
      const decodedToken = await admin.auth().verifyIdToken(token);
      const { email, name } = decodedToken;
      return { email, name };
    } catch (error) {
      console.error(error);
      throw new UnauthorizedException('Invalid Token.');
    }
  }

  public async createUser(personId: number, password: string): Promise<void> {
    const person = await this.findPersonById(personId);
    const passwordSalt = Crypto.randomBytes(16).toString(AuthService.encoding);
    const cryptographedPassword = this.hashPassword(password, passwordSalt);
    await this.userRepository.insert({
      passwordSalt,
      password: cryptographedPassword,
      person,
    });

    // Create Firebase user
    await admin.auth().createUser({
      uid: person.id.toString(),
      email: person.email,
      password,
      displayName: person.name,
    });
  }

  public async login(
    email: string,
    pass: string,
  ): Promise<{
    token: string;
    payload: JwtPayload;
  }> {
    const person = await this.findPersonByEmail(email);

    const user = await this.userRepository.findOne({
      where: {
        person: {
          id: person.id,
        },
      },
    });

    if (this.hashPassword(pass, user.passwordSalt) !== user.password) {
      throw new UnauthorizedException('Invalid Password.');
    }

    const payload: JwtPayload = {
      email: person.email,
      name: person.name,
    };

    const token = await admin
      .auth()
      .createCustomToken(person.id.toString(), payload);
    return {
      token,
      payload,
    };
  }

  private async findPersonByEmail(email: string): Promise<Person> {
    const person = await this.personRepository.findOne({
      select: { id: true, email: true, name: true },
      where: { email },
    });

    if (!person) throw new UnauthorizedException('User not found.');
    return person;
  }

  private async findPersonById(id: number): Promise<Person> {
    const person = await this.personRepository.findOne({
      select: { id: true, email: true, name: true },
      where: { id },
    });

    if (!person) throw new UnauthorizedException('User not found.');
    return person;
  }

  private hashPassword(password: string, salt: string): string {
    const userSecret = this.cryptoSecret + password;
    return Crypto.pbkdf2Sync(userSecret, salt, 1000, 64, `sha512`).toString(
      AuthService.encoding,
    );
  }
}
