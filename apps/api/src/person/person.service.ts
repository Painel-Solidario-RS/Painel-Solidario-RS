import { Inject } from '@nestjs/common/decorators';
import { CONSTANTS } from 'src/database/constants';
import { FindPersonDto } from './dtos/find-person.dto';
import { Person, VolunteerCategory } from './entities/person.entity';
import { Repository } from 'typeorm';
import { CreatePersonDTO } from './dtos/create-person.dto';
import { UpdatePersonDTO } from './dtos/update-person.dto';

export class PersonService {
  public constructor(
    @Inject(CONSTANTS.REPOSITORY.PERSON)
    private readonly personRepository: Repository<Person>,
    @Inject(CONSTANTS.REPOSITORY.VOLUNTEER_CATEGORY)
    private readonly categoryRepository: Repository<VolunteerCategory>,
  ) {}

  public find(filter: FindPersonDto): Promise<Person[]> {
    return this.personRepository.find({
      where: filter,
    });
  }

  public findById(id: number): Promise<Person | null> {
    return this.personRepository.findOne({
      where: { id },
      relations: ['categories', 'address'],
    });
  }

  public async create(data: CreatePersonDTO): Promise<number> {
    const { category } = await this.getOrCreateRelatedEntities({
      category: data.categoryName,
    });

    const person = this.personRepository.create({
      ...data,
      categories: [{ id: category }],
    });

    await this.personRepository.save(person);

    return person.id;
  }

  public async update(
    id: number,
    data: UpdatePersonDTO,
  ): Promise<Person | null> {
    this.getOrCreateRelatedEntities({
      category: data.categoryName,
    });

    await this.personRepository.update(id, data);

    const person = await this.personRepository.findOne({
      where: { id },
    });

    return person;
  }

  public async delete(id: number): Promise<void> {
    this.personRepository.delete(id);
  }

  private async getOrCreateRelatedEntities(data: {
    category: string;
  }): Promise<{
    category: number;
  }> {
    let category: VolunteerCategory | null = null;
    category = await this.categoryRepository.findOne({
      select: ['id'],
      where: { name: data.category },
    });

    if (!category) {
      category = this.categoryRepository.create({
        name: data.category,
      });
    }

    await this.categoryRepository.save(category);

    return {
      category: category.id,
    };
  }
}
