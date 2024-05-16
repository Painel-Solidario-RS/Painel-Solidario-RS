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
import { NeedService } from '../services/need.service';
import { ParseIntPipe } from '@nestjs/common/pipes';
import { Need } from '../entities/need.entity';
import { FindNeedDto } from '../dtos/find-need.dto';
import { ValidationPipe } from '@nestjs/common/pipes';
import { CreateNeedDTO } from '../dtos/create-need.dto';
import { UpdateNeedDTO } from '../dtos/update-need.dto';

@Controller('need')
export class NeedController {
  public constructor(
    @Inject(NeedService)
    private readonly needService: NeedService,
  ) {}

  @Get()
  public find(
    @Query(new ValidationPipe()) filter: FindNeedDto,
  ): Promise<Need[]> {
    return this.needService.find(filter);
  }

  @Get(':id')
  public findById(@Param('id', new ParseIntPipe()) id: number): Promise<Need> {
    return this.needService.findById(id);
  }

  @Post()
  public create(@Body(new ValidationPipe()) args: CreateNeedDTO) {
    return this.needService.create(args);
  }

  @Patch(':id')
  public update(
    @Param('id', new ParseIntPipe()) id: number,
    @Body(new ValidationPipe()) args: UpdateNeedDTO,
  ) {
    return this.needService.update(id, args);
  }

  @Delete(':id')
  public delete(@Param('id', new ParseIntPipe()) id: number): Promise<void> {
    return this.needService.delete(id);
  }
}
