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
import { PersonService } from './services/person.service';

@Controller('/person')
export class PersonController {
  constructor(private readonly personService: PersonService) {}

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
  ): Promise<{ id: number }> {
    const id = await this.personService.createPerson(args);
    return { id };
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
