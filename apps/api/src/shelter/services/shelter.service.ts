import { Inject, Injectable } from '@nestjs/common/decorators';
import { Shelter } from '../entities/shelter.entity';
import { CONSTANTS } from 'src/database/constants';
import { Repository } from 'typeorm';
import { FindShelterDto } from '../dtos/find-shelter.dto';
import { CreateShelterDTO } from '../dtos/create-shelter.dto';
import { Address } from 'src/address/entities/address.entity';
import { UpdateShelterDTO } from '../dtos/update-shelter.dto';
import { BadRequestException } from '@nestjs/common';
import { HttpStatus } from '@nestjs/common/enums';
import { HttpException } from '@nestjs/common';
import { ShelterSelectQueryBuilder } from './shelter-select-query.builder';

@Injectable()
export class ShelterService {
  public constructor(
    @Inject(CONSTANTS.REPOSITORY.SHELTERS)
    private readonly shelterRepository: Repository<Shelter>,
    @Inject(CONSTANTS.REPOSITORY.ADDRESS)
    private readonly addressRepository: Repository<Address>,
  ) {}

  public async findById(id: number): Promise<Shelter> {
    const shelter = await this.shelterRepository.findOneBy({ id });

    if (!shelter) {
      throw new HttpException('No Shelter found', HttpStatus.NO_CONTENT);
    }

    return shelter;
  }

  public async find(args: FindShelterDto): Promise<Shelter[]> {
    const query = new ShelterSelectQueryBuilder(this.shelterRepository)
      .byCapacity({ gte: args.minCapacity, lte: args.maxCapacity })
      .byIds(args.ids)
      .byName(args.name)
      .byType(args.type)
      .byContact(args.contact)
      .finish();

    const shelters = await query.getMany();

    if (!shelters?.length) {
      throw new HttpException('No Shelters found', HttpStatus.NO_CONTENT);
    }

    return shelters;
  }

  public async create(args: CreateShelterDTO) {
    const { addressId, ...rest } = args;
    const { address } = await this.getRelations(args);

    const shelter = this.shelterRepository.create({
      ...rest,
      address,
    });

    await this.shelterRepository.save(shelter);

    return shelter;
  }

  public async update(id: number, args: UpdateShelterDTO) {
    const { addressId, ...rest } = args;

    const { address } = await this.getRelations(args);

    await this.shelterRepository.findOneByOrFail({ id });

    await this.shelterRepository.update(id, {
      ...rest,
      address,
    });

    return this.shelterRepository.findOneByOrFail({ id });
  }

  public async delete(id: number): Promise<void> {
    this.shelterRepository.delete(id);
  }

  private async getRelations(args: { addressId?: number | null }): Promise<{
    address?: Address | null;
  }> {
    const shouldRemove = {
      address: false,
    };

    let address: Address | null = undefined;
    if (args.addressId) {
      address = await this.addressRepository.findOne({
        select: { id: true },
        where: { id: args.addressId },
      });
      if (!address) throw new BadRequestException('Address not found.');
    } else {
      shouldRemove.address = true;
    }

    return {
      address: shouldRemove.address ? null : address,
    };
  }
}
