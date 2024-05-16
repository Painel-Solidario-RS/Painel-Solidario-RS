import { Type } from 'class-transformer';
import {
  IsArray,
  IsBoolean,
  IsEmail,
  IsOptional,
  IsPositive,
  IsString,
  MinLength,
} from 'class-validator';

export class CreatePersonDTO {
  @IsEmail()
  public email: string;

  @IsString()
  @MinLength(6)
  public password: string;

  @IsOptional()
  @IsString()
  public name?: string;

  @IsOptional()
  @IsPositive()
  public employmentId?: number;

  @IsString()
  public phone: string;

  @IsString()
  public categoryName: string;

  @IsOptional()
  @Type(() => Array)
  @IsArray()
  // Com o each aplicamos a validação em cada item do array
  @IsPositive({ each: true })
  public activitiesId?: number[];

  @IsOptional()
  @Type(() => Array)
  @IsArray()
  @IsPositive({ each: true })
  public shiftsId?: number[];

  @IsOptional()
  @IsPositive()
  public addressId?: number;

  @IsOptional()
  @IsBoolean()
  public isAllocated?: boolean;
}
