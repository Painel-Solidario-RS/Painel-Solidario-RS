import { Inject } from '@nestjs/common/decorators';
import { CONSTANTS } from 'src/database/constants';
import { Repository } from 'typeorm';
import { CreatePersonActivityDTO } from '../dtos/create-person-entities.dto';
import { FindPersonActivityDto } from '../dtos/find-person.dto';
import { UpdatePersonActivityDTO } from '../dtos/update-person.dto';
import { PersonActivity } from '../entities/person.entity';

export class PersonActivityService {
  public constructor(
    @Inject(CONSTANTS.REPOSITORY.PERSON_ACTIVITY)
    private readonly personActivityRepo: Repository<PersonActivity>,
  ) {}

  public async findPersonActivityByFilter(
    filter: FindPersonActivityDto,
  ): Promise<PersonActivity[]> {
    return this.personActivityRepo.find({
      where: filter,
    });
  }

  public findPersonActivityById(id: number): Promise<PersonActivity | null> {
    return this.personActivityRepo.findOne({
      where: { id },
    });
  }

  public async createPersonActivity(
    data: CreatePersonActivityDTO,
  ): Promise<number> {
    const obj = this.personActivityRepo.create({
      ...data,
    });

    await this.personActivityRepo.save(obj);

    return obj.id;
  }

  public async updatePersonActivity(
    id: number,
    data: UpdatePersonActivityDTO,
  ): Promise<PersonActivity> {
    await this.personActivityRepo.update(id, data);

    const obj = await this.personActivityRepo.findOne({
      where: { id },
    });

    return obj;
  }

  public async deletePersonActivityById(id: number): Promise<void> {
    await this.personActivityRepo.delete(id);
  }
}
