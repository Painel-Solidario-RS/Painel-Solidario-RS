import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString, Matches } from 'class-validator';
import { TimeRegexp } from 'src/common/types';

export class CreatePersonAddressDTO {
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

export class CreateVolunteerCategoryDTO {
  @IsString()
  @ApiProperty({
    description: 'Nome da Categoria de Voluntário',
    example: 'Voluntário Civil',
    type: String,
  })
  public name: string;
}

export class CreatePersonEmploymentDTO {
  @IsString()
  @ApiProperty({
    description: 'Código de Ocupação CBO',
    example: '225125',
    type: String,
  })
  public cboCode: string;

  @IsString()
  @ApiProperty({
    description: 'Nome da Ocupação',
    example: 'Médico',
    type: String,
  })
  public name: string;
}

export class CreatePersonActivityDTO {
  @IsString()
  @ApiProperty({
    description: 'Nome da Atividade',
    example: 'Cozinhar',
    type: String,
  })
  public name: string;
}

export class CreatePersonShiftsDTO {
  @IsString()
  @ApiProperty({
    description: 'Nome do Turno',
    example: 'Manhã',
    type: String,
  })
  public name: string;

  @IsString()
  @Matches(TimeRegexp)
  @ApiProperty({
    description: 'Início do Turno',
    example: '08:00',
    type: String,
  })
  public startDate: Date;

  @IsString()
  @Matches(TimeRegexp)
  @ApiProperty({
    description: 'Fim do Turno',
    example: '12:00',
    type: String,
  })
  public endDate: Date;
}
