import {
  Body,
  Controller,
  Delete,
  Inject,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { ShelterService } from '../services/shelter.service';
import { ParseIntPipe } from '@nestjs/common/pipes';
import { Shelter } from '../entities/shelter.entity';
import { FindShelterDto } from '../dtos/find-shelter.dto';
import { ValidationPipe } from '@nestjs/common/pipes';
import { CreateShelterDTO } from '../dtos/create-shelter.dto';
import { UpdateShelterDTO } from '../dtos/update-shelter.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Abrigos')
@Controller('shelter')
export class ShelterController {
  public constructor(
    @Inject(ShelterService)
    private readonly shelterService: ShelterService,
  ) {}

  @Get()
  public find(
    @Query(new ValidationPipe({ transform: true })) filter: FindShelterDto,
  ): Promise<Shelter[]> {
    return this.shelterService.find(filter);
  }

  @Get(':id')
  public findById(
    @Param('id', new ParseIntPipe()) id: number,
  ): Promise<Shelter> {
    return this.shelterService.findById(id);
  }

  @Post()
  public create(@Body(new ValidationPipe()) args: CreateShelterDTO) {
    return this.shelterService.create(args);
  }

  @Patch(':id')
  public update(
    @Param('id', new ParseIntPipe()) id: number,
    @Body(new ValidationPipe()) args: UpdateShelterDTO,
  ) {
    return this.shelterService.update(id, args);
  }

  @Delete(':id')
  public delete(@Param('id', new ParseIntPipe()) id: number): Promise<void> {
    return this.shelterService.delete(id);
  }
}
