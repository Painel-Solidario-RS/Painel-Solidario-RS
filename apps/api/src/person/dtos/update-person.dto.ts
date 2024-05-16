import { Type } from 'class-transformer';
import {
  IsArray,
  IsBoolean,
  IsEmail,
  IsOptional,
  IsPositive,
  IsString,
} from 'class-validator';

export class UpdatePersonDTO {
  @IsOptional()
  @IsEmail()
  public email?: string;

  @IsOptional()
  @IsString()
  public name?: string;

  @IsOptional()
  @IsPositive()
  public employmentId?: number;

  @IsOptional()
  @IsString()
  public phone?: string;

  @IsOptional()
  @IsString()
  public categoryName?: string;

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
