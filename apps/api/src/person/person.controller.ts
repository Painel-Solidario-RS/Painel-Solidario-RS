import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  Res,
} from '@nestjs/common';
import { ParseIntPipe } from '@nestjs/common/pipes';
import { type Response } from 'express';
import { ValidationPipe } from 'src/common/validation.pipe';
import { CreatePersonDTO } from './dtos/create-person.dto';
import { FindPersonDto } from './dtos/find-person.dto';
import { UpdatePersonDTO } from './dtos/update-person.dto';
import { Person } from './entities/person.entity';
import { Public } from './modules/auth/decorators/public.decorator';
import { AuthService } from './modules/auth/services/auth.service';
import { JwtPayload } from './modules/auth/types';
import { PersonService } from './person.service';

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
    return this.personService.findPersonByFilter(filter);
  }

  @Get(':id')
  public findById(
    @Param('id', new ParseIntPipe()) id: number,
  ): Promise<Person | null> {
    return this.personService.findPersonById(id);
  }

  @Public()
  @Post()
  public async create(
    @Body(new ValidationPipe()) args: CreatePersonDTO,
    @Res({ passthrough: true }) response: Response,
  ): Promise<JwtPayload> {
    const id = await this.personService.createPerson(args);
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
    return this.personService.updatePerson(id, args);
  }

  @Delete(':id')
  public delete(@Param('id', new ParseIntPipe()) id: number): Promise<void> {
    return this.personService.deletePerson(id);
  }
}
