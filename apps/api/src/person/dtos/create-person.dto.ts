import { Type } from 'class-transformer';
import {
  IsArray,
  IsBoolean,
  IsEmail,
  IsObject,
  IsOptional,
  IsPositive,
  IsString,
  MinLength,
} from 'class-validator';
import { CreatePersonAddressDTO } from './create-person-entities.dto';
import { ApiProperty } from '@nestjs/swagger';

export class CreatePersonDTO {
  @MinLength(6)
  @IsString()
  @ApiProperty({
    example: 'João da Silva',
    description: 'Name of the person',
  })
  public name: string;

  @IsEmail()
  @ApiProperty({
    example: 'pessoa@email.com',
    type: String,
  })
  public email: string;

  @IsString()
  @ApiProperty({
    description: 'Telefone',
    example: '(51) 99999-9999',
    type: String,
  })
  public phone: string;

  @IsBoolean()
  @ApiProperty({
    description: 'Se a pessoa já está alocada',
    example: false,
    type: Boolean,
  })
  public allocated: boolean;

  @IsOptional()
  @IsPositive()
  @ApiProperty({
    description: 'ID da Ocupação',
    example: 1,
    type: Number,
  })
  public employmentId?: number;

  @IsOptional()
  @Type(() => Array)
  @IsArray()
  @IsPositive({ each: true })
  @ApiProperty({
    description: 'IDs das categorias de voluntário',
    example: [1],
    type: [Number],
  })
  public volunteerCategoryIds?: number[];

  @IsOptional()
  @Type(() => Array)
  @IsArray()
  @IsPositive({ each: true })
  @ApiProperty({
    description: 'IDs das atividades',
    example: [1, 2],
    type: [Number],
  })
  public activityIds?: number[];

  @IsOptional()
  @Type(() => Array)
  @IsArray()
  @IsPositive({ each: true })
  @ApiProperty({
    description: 'IDs dos turnos',
    example: [1, 2],
    type: [Number],
  })
  public shiftIds?: number[];

  @Type(() => CreatePersonAddressDTO)
  @IsObject()
  @IsOptional()
  @ApiProperty({
    description: 'Endereço da pessoa',
    type: CreatePersonAddressDTO,
  })
  public address?: CreatePersonAddressDTO;
}
