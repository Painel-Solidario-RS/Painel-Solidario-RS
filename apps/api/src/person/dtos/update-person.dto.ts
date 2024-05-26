import { Type } from 'class-transformer';
import {
  IsArray,
  IsBoolean,
  IsEmail,
  IsOptional,
  IsPositive,
  IsString,
  Matches,
} from 'class-validator';
import { TimeRegexp } from 'src/common/types';

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

export class UpdatePersonEmploymentDTO {
  @IsString()
  @IsOptional()
  public cboCode?: string;

  @IsString()
  @IsOptional()
  public name?: string;
}

export class UpdateVolunteerCategoryDTO {
  @IsString()
  @IsOptional()
  public name?: string;
}

export class UpdatePersonActivityDTO {
  @IsString()
  @IsOptional()
  public name?: string;
}

export class UpdatePersonShiftsDTO {
  @IsOptional()
  @IsString()
  public name?: string;

  @IsOptional()
  @IsString()
  @Matches(TimeRegexp)
  public startDate?: Date;

  @IsOptional()
  @IsString()
  @Matches(TimeRegexp)
  public endDate?: Date;
}
