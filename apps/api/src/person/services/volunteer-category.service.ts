import { Inject } from '@nestjs/common/decorators';
import { CONSTANTS } from 'src/database/constants';
import { Repository } from 'typeorm';
import { FindVolunteerCategoryDto } from '../dtos/find-person.dto';
import { UpdateVolunteerCategoryDTO } from '../dtos/update-person-entities.dto';
import { VolunteerCategory } from '../entities/person.entity';
import { CreateVolunteerCategoryDTO } from '../dtos/create-person-entities.dto';

export class VolunteerCategoryService {
  public constructor(
    @Inject(CONSTANTS.REPOSITORY.VOLUNTEER_CATEGORY)
    private readonly categoryRepo: Repository<VolunteerCategory>,
  ) {}

  public async findVolunteerCategoryByFilter(
    filter: FindVolunteerCategoryDto,
  ): Promise<VolunteerCategory[]> {
    return this.categoryRepo.find({
      where: filter,
    });
  }

  public findVolunteerCategoryById(
    id: number,
  ): Promise<VolunteerCategory | null> {
    return this.categoryRepo.findOne({
      where: { id },
    });
  }

  public async createVolunteerCategory(
    data: CreateVolunteerCategoryDTO,
  ): Promise<number> {
    const obj = this.categoryRepo.create({
      ...data,
    });

    await this.categoryRepo.save(obj);

    return obj.id;
  }

  public async updateVolunteerCategory(
    id: number,
    data: UpdateVolunteerCategoryDTO,
  ): Promise<VolunteerCategory> {
    await this.categoryRepo.update(id, data);

    const obj = await this.categoryRepo.findOne({
      where: { id },
    });

    return obj;
  }

  public async deleteVolunteerCategoryById(id: number): Promise<void> {
    await this.categoryRepo.delete(id);
  }
}
