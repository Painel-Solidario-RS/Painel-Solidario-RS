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

export class CreatePersonDTO {
  @MinLength(6)
  @IsString()
  public name: string;

  @IsEmail()
  public email: string;

  @IsString()
  public phone: string;

  @IsBoolean()
  public allocated: boolean;

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

  @Type(() => CreatePersonAddressDTO)
  @IsObject()
  @IsOptional()
  public address?: CreatePersonAddressDTO;
}
