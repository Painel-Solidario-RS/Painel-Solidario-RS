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
  public name?: string;

  @IsOptional()
  @IsEmail()
  public email?: string;

  @IsOptional()
  @IsString()
  public phone?: string;

  @IsOptional()
  @IsBoolean()
  public allocated?: boolean;

  @IsOptional()
  @IsPositive()
  public employmentId?: number;

  @IsOptional()
  @Type(() => Array)
  @IsArray()
  @IsPositive({ each: true })
  public volunteerCategoryIds?: number[];

  @IsOptional()
  @Type(() => Array)
  @IsArray()
  @IsPositive({ each: true })
  public activityIds?: number[];

  @IsOptional()
  @Type(() => Array)
  @IsArray()
  @IsPositive({ each: true })
  public shiftIds?: number[];

  @IsOptional()
  @Type(() => UpdatePersonAddressDTO)
  @IsObject()
  public address?: UpdatePersonAddressDTO;
}
