import { Type } from 'class-transformer';
import { IsOptional, IsPositive, IsString } from 'class-validator';

export class FindPersonDto {
  @IsOptional()
  @Type(() => Number)
  @IsPositive()
  public id?: number;

  @IsOptional()
  @IsString()
  public email?: string;

  @IsOptional()
  @IsString()
  public name?: string;

  @IsOptional()
  @IsString()
  public phone?: string;
}

export class FindVolunteerCategoryDto {
  @IsOptional()
  @Type(() => Number)
  @IsPositive()
  public id?: number;

  @IsOptional()
  @IsString()
  public name?: string;
}

export class FindPersonEmploymentDto {
  @IsOptional()
  @Type(() => Number)
  @IsPositive()
  public id?: number;

  @IsOptional()
  @IsString()
  public cboCode?: string;

  @IsOptional()
  @IsString()
  public name?: string;
}

export class FindPersonActivityDto {
  @IsOptional()
  @Type(() => Number)
  @IsPositive()
  public id?: number;

  @IsOptional()
  @IsString()
  public name?: string;
}

export class FindPersonShiftsDto {
  @IsOptional()
  @Type(() => Number)
  @IsPositive()
  public id?: number;

  @IsOptional()
  @IsString()
  public name?: string;
}
