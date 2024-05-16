import { Inject, Injectable } from '@nestjs/common/decorators';
import { Need } from '../entities/need.entity';
import { CONSTANTS } from 'src/database/constants';
import { Repository } from 'typeorm';
import { FindNeedDto } from '../dtos/find-need.dto';
import { CreateNeedDTO } from '../dtos/create-need.dto';
import { UpdateNeedDTO } from '../dtos/update-need.dto';
import { HttpStatus } from '@nestjs/common/enums';
import { HttpException } from '@nestjs/common';

@Injectable()
export class NeedService {
  public constructor(
    @Inject(CONSTANTS.REPOSITORY.NEED)
    private readonly needRepository: Repository<Need>,
  ) {}

  public async findById(id: number): Promise<Need> {
    const need = await this.needRepository.findOneBy({ id });

    if (!need) {
      throw new HttpException('No Need found', HttpStatus.NO_CONTENT);
    }

    return need;
  }

  public async find(args: FindNeedDto): Promise<Need[]> {
    const needs = await this.needRepository.findBy(args);

    if (!needs) {
      throw new HttpException('No Needs found', HttpStatus.NO_CONTENT);
    }

    return needs;
  }

  public async create(args: CreateNeedDTO) {
    const need = this.needRepository.create({ ...args });
    await this.needRepository.save(need);

    return need;
  }

  public async update(id: number, args: UpdateNeedDTO) {
    await this.needRepository.findOneByOrFail({ id });
    await this.needRepository.update(id, {
      ...args,
    });

    return this.needRepository.findOneByOrFail({ id });
  }

  public async delete(id: number): Promise<void> {
    this.needRepository.delete(id);
  }
}
