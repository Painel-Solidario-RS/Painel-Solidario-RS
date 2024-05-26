import { IsOptional, IsString, Matches } from 'class-validator';
import { TimeRegexp } from 'src/common/types';

export class UpdatePersonAddressDTO {
  @IsString()
  @IsOptional()
  public cep?: string;

  @IsString()
  @IsOptional()
  public state?: string;

  @IsString()
  @IsOptional()
  public street?: string;

  @IsString()
  @IsOptional()
  public city?: string;

  @IsString()
  @IsOptional()
  public neighborhood?: string;

  @IsString()
  @IsOptional()
  public number?: string;

  @IsString()
  @IsOptional()
  public complement?: string;
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
