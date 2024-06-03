import { ApiProperty } from '@nestjs/swagger';
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
import { UpdatePersonAddressDTO } from './update-person-entities.dto';

export class UpdatePersonDTO {
  @IsOptional()
  @MinLength(6)
  @IsString()
  @ApiProperty({
    description: 'Nome da pessoa',
    example: 'João da Silva',
    type: String,
    required: false,
  })
  public name?: string;

  @IsOptional()
  @IsEmail()
  @ApiProperty({
    description: 'E-mail',
    example: 'pessoa@email.com',
    type: String,
    required: false,
  })
  public email?: string;

  @IsOptional()
  @IsString()
  @ApiProperty({
    description: 'Telefone',
    example: '(51) 99999-9999',
    type: String,
    required: false,
  })
  public phone?: string;

  @IsOptional()
  @IsBoolean()
  @ApiProperty({
    description: 'Se a pessoa já está alocada',
    example: false,
    type: Boolean,
    required: false,
  })
  public allocated?: boolean;

  @IsOptional()
  @IsPositive()
  @ApiProperty({
    description: 'ID da Ocupação',
    example: 1,
    type: Number,
    required: false,
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
    required: false,
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
    required: false,
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
    required: false,
  })
  public shiftIds?: number[];

  @IsOptional()
  @Type(() => UpdatePersonAddressDTO)
  @IsObject()
  @ApiProperty({
    description: 'Endereço da pessoa',
    type: UpdatePersonAddressDTO,
    required: false,
  })
  public address?: UpdatePersonAddressDTO;
}
