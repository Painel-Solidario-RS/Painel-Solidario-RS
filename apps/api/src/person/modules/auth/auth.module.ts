import { Module } from '@nestjs/common';
import { userProviders } from './entities/user.provider';
import { AuthService } from './services/auth.service';
import { personProviders } from 'src/person/entities/person.provider';
import { JwtModule } from '@nestjs/jwt';
import { ConfigService, ConfigModule } from '@nestjs/config';
import { AuthController } from './controllers/auth.controller';
import { DatabaseModule } from 'src/database/database.module';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from './auth.guard';

@Module({
  imports: [
    ConfigModule,
    JwtModule.registerAsync({
      useFactory: (configService: ConfigService) => ({
        global: true,
        secret: configService.getOrThrow<string>('JWT_SECRET'),
        signOptions: {
          expiresIn: configService.getOrThrow<string>('JWT_EXPIRATION'),
          algorithm: 'HS256',
        },
      }),
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
    DatabaseModule,
  ],
  providers: [
    ...personProviders,
    ...userProviders,
    AuthService,
    { provide: APP_GUARD, useClass: AuthGuard },
  ],
  controllers: [AuthController],
  exports: [AuthService],
})
export class AuthModule {}
