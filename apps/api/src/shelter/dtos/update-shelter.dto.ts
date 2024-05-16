import { IsIn, IsInt, IsOptional, IsPositive } from 'class-validator';
import { ShelterType } from '../entities/shelter.entity';

export class UpdateShelterDTO {
  @IsOptional()
  name?: string;

  @IsOptional()
  contact?: string;

  @IsOptional()
  @IsIn(Object.values(ShelterType))
  type?: ShelterType;

  @IsOptional()
  @IsPositive()
  @IsInt()
  addressId?: number;

  @IsOptional()
  @IsPositive()
  @IsInt()
  capacity?: number;
}
