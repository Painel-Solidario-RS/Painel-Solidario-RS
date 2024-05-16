import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Res,
  Query,
} from '@nestjs/common';
import { ParseIntPipe } from '@nestjs/common/pipes';
import { ValidationPipe } from 'src/common/validation.pipe';
import { CreatePersonDTO } from './dtos/create-person.dto';
import { FindPersonDto } from './dtos/find-person.dto';
import { UpdatePersonDTO } from './dtos/update-person.dto';
import { Person } from './entities/person.entity';
import { AuthService } from './modules/auth/services/auth.service';
import { PersonService } from './person.service';
import { Public } from './modules/auth/decorators/public.decorator';
import { type Response } from 'express';
import { JwtPayload } from './modules/auth/types';

@Controller('/person')
export class PersonController {
  constructor(
    private readonly personService: PersonService,
    private readonly authService: AuthService,
  ) {}

  @Get()
  public find(
    @Query(new ValidationPipe()) filter: FindPersonDto,
  ): Promise<Person[]> {
    return this.personService.find(filter);
  }

  @Get(':id')
  public findById(
    @Param('id', new ParseIntPipe()) id: number,
  ): Promise<Person | null> {
    return this.personService.findById(id);
  }

  @Public()
  @Post()
  public async create(
    @Body(new ValidationPipe()) args: CreatePersonDTO,
    @Res({ passthrough: true }) response: Response,
  ): Promise<JwtPayload> {
    const id = await this.personService.create(args);
    const { password } = args;
    await this.authService.createUser(id, password);

    const { token, payload } = await this.authService.login(
      args.email,
      password,
    );

    response.header('x-auth-token', token);

    return payload;
  }

  @Patch(':id')
  public update(
    @Param('id', new ParseIntPipe()) id: number,
    @Body(new ValidationPipe()) args: UpdatePersonDTO,
  ): Promise<Person> {
    return this.personService.update(id, args);
  }

  @Delete(':id')
  public delete(@Param('id', new ParseIntPipe()) id: number): Promise<void> {
    return this.personService.delete(id);
  }
}
