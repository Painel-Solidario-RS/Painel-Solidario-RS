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
