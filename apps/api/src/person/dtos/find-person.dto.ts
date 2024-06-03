import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsOptional, IsPositive, IsString } from 'class-validator';

export class FindPersonDto {
  @IsOptional()
  @Type(() => Number)
  @IsPositive()
  @ApiProperty({
    example: 1,
    type: Number,
  })
  public id?: number;

  @IsOptional()
  @IsString()
  @ApiProperty({
    example: 'pessoa@email.com',
    type: String,
  })
  public email?: string;

  @IsOptional()
  @IsString()
  @ApiProperty({
    description: 'Nome da Pessoa',
    example: 'João da Silva',
    type: String,
  })
  public name?: string;

  @IsOptional()
  @IsString()
  @ApiProperty({
    description: 'Telefone',
    example: '(51) 99999-9999',
    type: String,
  })
  public phone?: string;
}

export class FindVolunteerCategoryDto {
  @IsOptional()
  @Type(() => Number)
  @IsPositive()
  @ApiProperty({
    example: 1,
    type: Number,
  })
  public id?: number;

  @IsOptional()
  @IsString()
  @ApiProperty({
    description: 'Nome da Categoria de Voluntário',
    example: 'Voluntário Civil',
    type: String,
  })
  public name?: string;
}

export class FindPersonEmploymentDto {
  @IsOptional()
  @Type(() => Number)
  @IsPositive()
  @ApiProperty({
    example: 1,
    type: Number,
  })
  public id?: number;

  @IsOptional()
  @IsString()
  @ApiProperty({
    description: 'Código de Ocupação CBO',
    example: '225125',
    type: String,
  })
  public cboCode?: string;

  @IsOptional()
  @IsString()
  @ApiProperty({
    description: 'Nome da Ocupação',
    example: 'Médico',
    type: String,
  })
  public name?: string;
}

export class FindPersonActivityDto {
  @IsOptional()
  @Type(() => Number)
  @IsPositive()
  @ApiProperty({
    example: 1,
    type: Number,
  })
  public id?: number;

  @IsOptional()
  @IsString()
  @ApiProperty({
    description: 'Nome da Atividade',
    example: 'Cozinhar',
    type: String,
  })
  public name?: string;
}

export class FindPersonShiftsDto {
  @IsOptional()
  @Type(() => Number)
  @IsPositive()
  @ApiProperty({
    example: 1,
    type: Number,
  })
  public id?: number;

  @IsOptional()
  @IsString()
  @ApiProperty({
    description: 'Nome do Turno',
    example: 'Manhã',
    type: String,
  })
  public name?: string;
}
