import { IsOptional, IsString, Matches } from 'class-validator';
import { TimeRegexp } from 'src/common/types';

export class CreatePersonAddressDTO {
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

export class CreatePersonEmploymentDTO {
  @IsString()
  public cboCode: string;
  @IsString()
  public name: string;
}

export class CreateVolunteerCategoryDTO {
  @IsString()
  public name: string;
}

export class CreatePersonActivityDTO {
  @IsString()
  public name: string;
}

export class CreatePersonShiftsDTO {
  @IsString()
  public name: string;

  @IsString()
  @Matches(TimeRegexp)
  public startDate: Date;

  @IsString()
  @Matches(TimeRegexp)
  public endDate: Date;
}
