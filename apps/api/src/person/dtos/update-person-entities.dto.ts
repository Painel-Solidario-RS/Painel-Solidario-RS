import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString, Matches } from 'class-validator';
import { TimeRegexp } from 'src/common/types';

export class UpdatePersonAddressDTO {
  @IsString()
  @IsOptional()
  @ApiProperty({
    example: '90000-000',
    description: 'CEP',
    required: false,
  })
  public cep?: string;

  @IsString()
  @IsOptional()
  @ApiProperty({
    example: 'RS',
    description: 'UF do estado',
    required: false,
  })
  public state?: string;

  @IsString()
  @IsOptional()
  @ApiProperty({
    example: 'Rua das Flores',
    description: 'Rua',
    required: false,
  })
  public street?: string;

  @IsString()
  @IsOptional()
  @ApiProperty({
    example: 'Porto Alegre',
    description: 'Cidade',
    required: false,
  })
  public city?: string;

  @IsString()
  @IsOptional()
  @ApiProperty({
    example: 'Centro',
    description: 'Bairro',
    required: false,
  })
  public neighborhood?: string;

  @IsString()
  @IsOptional()
  @ApiProperty({
    example: '123',
    description: 'Número',
    required: false,
  })
  public number?: string;

  @IsString()
  @IsOptional()
  @ApiProperty({
    example: null,
    description: 'Complemento',
    required: false,
  })
  public complement?: string;
}

export class UpdatePersonEmploymentDTO {
  @IsString()
  @IsOptional()
  @ApiProperty({
    description: 'Código de Ocupação CBO',
    example: '225125',
    type: String,
    required: false,
  })
  public cboCode?: string;

  @IsString()
  @IsOptional()
  @ApiProperty({
    description: 'Nome da Ocupação',
    example: 'Médico',
    type: String,
    required: false,
  })
  public name?: string;
}

export class UpdateVolunteerCategoryDTO {
  @IsString()
  @IsOptional()
  @ApiProperty({
    description: 'Nome da Categoria de Voluntário',
    example: 'Voluntário Civil',
    type: String,
    required: false,
  })
  public name?: string;
}

export class UpdatePersonActivityDTO {
  @IsString()
  @IsOptional()
  @ApiProperty({
    description: 'Nome da Atividade',
    example: 'Cozinhar',
    type: String,
    required: false,
  })
  public name?: string;
}

export class UpdatePersonShiftsDTO {
  @IsOptional()
  @IsString()
  @ApiProperty({
    description: 'Nome do Turno',
    example: 'Manhã',
    type: String,
    required: false,
  })
  public name?: string;

  @IsOptional()
  @IsString()
  @Matches(TimeRegexp)
  @ApiProperty({
    description: 'Início do Turno',
    example: '08:00',
    type: String,
    required: false,
  })
  public startDate?: Date;

  @IsOptional()
  @IsString()
  @Matches(TimeRegexp)
  @ApiProperty({
    description: 'Fim do Turno',
    example: '12:00',
    type: String,
    required: false,
  })
  public endDate?: Date;
}
