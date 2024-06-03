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
import {
  ApiBody,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiOperation,
  ApiParam,
  ApiTags,
  getSchemaPath,
} from '@nestjs/swagger';
import { ValidationPipe } from 'src/common/validation.pipe';
import { CreatePersonDTO } from './dtos/create-person.dto';
import { FindPersonDto } from './dtos/find-person.dto';
import { UpdatePersonDTO } from './dtos/update-person.dto';
import { Person } from './entities/person.entity';
import { Public } from './modules/auth/decorators/public.decorator';
import { PersonService } from './services/person.service';

@ApiTags('Pessoas')
@Controller('/person')
export class PersonController {
  constructor(private readonly personService: PersonService) {}

  @ApiOperation({ summary: 'Busca pessoas utilizando um filtro' })
  @ApiOkResponse({
    schema: {
      type: 'array',
      items: {
        $ref: getSchemaPath(Person),
      },
    },
  })
  @Get()
  public find(
    @Query(new ValidationPipe())
    filter: FindPersonDto,
  ): Promise<Person[]> {
    return this.personService.findPersonByFilter(filter);
  }

  @ApiOperation({ summary: 'Busca uma pessoa pelo seu ID' })
  @ApiParam({
    name: 'id',
    description: 'ID da pessoa',
  })
  @ApiOkResponse({
    schema: {
      $ref: getSchemaPath(Person),
    },
  })
  @Get(':id')
  public findById(
    @Param('id', new ParseIntPipe())
    id: number,
  ): Promise<Person | null> {
    return this.personService.findPersonById(id);
  }

  @ApiOperation({ summary: 'Cria uma pessoa' })
  @ApiBody({
    type: CreatePersonDTO,
    schema: {
      $ref: getSchemaPath(CreatePersonDTO),
    },
  })
  @ApiCreatedResponse({
    schema: {
      type: 'object',
      properties: {
        id: {
          type: 'number',
          example: 1,
        },
      },
    },
  })
  @Public()
  @Post()
  public async create(
    @Body(new ValidationPipe()) args: CreatePersonDTO,
  ): Promise<{ id: number }> {
    const id = await this.personService.createPerson(args);
    return { id };
  }

  @ApiOperation({ summary: 'Atualiza uma pessoa' })
  @ApiParam({
    name: 'id',
    description: 'ID da pessoa',
  })
  @ApiBody({
    type: UpdatePersonDTO,
    schema: {
      $ref: getSchemaPath(UpdatePersonDTO),
    },
  })
  @ApiOkResponse({
    schema: {
      $ref: getSchemaPath(Person),
    },
    type: Person,
  })
  @Patch(':id')
  public update(
    @Param('id', new ParseIntPipe()) id: number,
    @Body(new ValidationPipe()) args: UpdatePersonDTO,
  ): Promise<Person> {
    return this.personService.updatePerson(id, args);
  }

  @ApiOperation({ summary: 'Deleta uma pessoa' })
  @ApiParam({
    name: 'id',
    description: 'ID da pessoa',
  })
  @ApiOkResponse()
  @Delete(':id')
  public delete(@Param('id', new ParseIntPipe()) id: number): Promise<void> {
    return this.personService.deletePerson(id);
  }
}
