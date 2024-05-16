import { IsOptional, IsPositive, IsIn } from 'class-validator';
import { Type } from 'class-transformer';

export class FindNeedDto {
  @IsOptional()
  @Type(() => Array)
  @IsPositive({ each: true })
  public ids?: number[];

  @IsOptional()
  public description?: string;
}
