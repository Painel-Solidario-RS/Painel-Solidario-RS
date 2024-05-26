import { Inject } from '@nestjs/common/decorators';
import { CONSTANTS } from 'src/database/constants';
import { Repository } from 'typeorm';
import { CreatePersonDTO } from './dtos/create-person.dto';
import {
  FindPersonActivityDto,
  FindPersonDto,
  FindPersonEmploymentDto,
  FindPersonShiftsDto,
  FindVolunteerCategoryDto,
} from './dtos/find-person.dto';
import { UpdatePersonDTO } from './dtos/update-person.dto';
import {
  Person,
  PersonActivity,
  PersonEmployment,
  PersonShifts,
  VolunteerCategory,
} from './entities/person.entity';

export class PersonService {
  public constructor(
    @Inject(CONSTANTS.REPOSITORY.PERSON)
    private readonly personRepo: Repository<Person>,
    @Inject(CONSTANTS.REPOSITORY.PERSON_SHIFT)
    private readonly shiftRepo: Repository<PersonShifts>,
    @Inject(CONSTANTS.REPOSITORY.PERSON_ACTIVITY)
    private readonly activityRepo: Repository<PersonActivity>,
    @Inject(CONSTANTS.REPOSITORY.PERSON_EMPLOYMENT)
    private readonly employmentRepo: Repository<PersonEmployment>,
    @Inject(CONSTANTS.REPOSITORY.VOLUNTEER_CATEGORY)
    private readonly categoryRepo: Repository<VolunteerCategory>,
  ) {}

  public findPersonByFilter(filter: FindPersonDto): Promise<Person[]> {
    return this.personRepo.find({
      where: filter,
    });
  }

  public findPersonById(id: number): Promise<Person | null> {
    return this.personRepo.findOne({
      where: { id },
      relations: ['categories', 'address'],
    });
  }

  public async createPerson(data: CreatePersonDTO): Promise<number> {
    const { category } = await this.getOrCreateRelatedEntities({
      category: data.categoryName,
    });

    const person = this.personRepo.create({
      ...data,
      categories: [{ id: category }],
    });

    await this.personRepo.save(person);

    return person.id;
  }

  public async updatePerson(
    id: number,
    data: UpdatePersonDTO,
  ): Promise<Person | null> {
    this.getOrCreateRelatedEntities({
      category: data.categoryName,
    });

    await this.personRepo.update(id, data);

    const person = await this.personRepo.findOne({
      where: { id },
    });

    return person;
  }

  public async deletePerson(id: number): Promise<void> {
    this.personRepo.delete(id);
  }

  public async findVolunteerCategory(
    filter: FindVolunteerCategoryDto,
  ): Promise<VolunteerCategory[]> {
    return this.categoryRepo.find({
      where: filter,
    });
  }
  public async findPersonEmployment(
    filter: FindPersonEmploymentDto,
  ): Promise<PersonEmployment[]> {
    return this.employmentRepo.find({
      where: filter,
    });
  }
  public async findPersonActivity(
    filter: FindPersonActivityDto,
  ): Promise<PersonActivity[]> {
    return this.activityRepo.find({
      where: filter,
    });
  }
  public async findPersonShifts(
    filter: FindPersonShiftsDto,
  ): Promise<PersonShifts[]> {
    return this.shiftRepo.find({
      where: filter,
    });
  }

  private async getOrCreateRelatedEntities(data: {
    category: string;
  }): Promise<{
    category: number;
  }> {
    let category: VolunteerCategory | null = null;
    category = await this.categoryRepo.findOne({
      select: ['id'],
      where: { name: data.category },
    });

    if (!category) {
      category = this.categoryRepo.create({
        name: data.category,
      });
    }

    await this.categoryRepo.save(category);

    return {
      category: category.id,
    };
  }
}
