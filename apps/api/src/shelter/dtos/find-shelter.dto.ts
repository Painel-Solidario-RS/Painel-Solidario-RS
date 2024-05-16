import { Transform, Type } from 'class-transformer';
import { IsIn, IsOptional, IsPositive } from 'class-validator';
import { CommonTransformers } from 'src/common/transformers/common-transformers';
import { ShelterType } from '../entities/shelter.entity';

export class FindShelterDto {
  @IsOptional()
  @Transform(CommonTransformers.toNumberArray)
  public ids?: number[];

  @IsOptional()
  public name?: string;

  @IsOptional()
  public contact?: string;

  @IsOptional()
  @IsIn(Object.values(ShelterType))
  public type?: ShelterType;

  @IsOptional()
  @Transform(CommonTransformers.toNumberArray)
  @IsPositive({ each: true })
  public addressId?: number[];

  @IsOptional()
  @Type(() => Number)
  @IsPositive()
  maxCapacity?: number;

  @IsOptional()
  @Type(() => Number)
  @IsPositive()
  minCapacity?: number;
}
