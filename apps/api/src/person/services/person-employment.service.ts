import { Inject } from '@nestjs/common/decorators';
import { CONSTANTS } from 'src/database/constants';
import { Repository } from 'typeorm';
import { CreatePersonEmploymentDTO } from '../dtos/create-person-entities.dto';
import { FindPersonEmploymentDto } from '../dtos/find-person.dto';
import { UpdatePersonEmploymentDTO } from '../dtos/update-person.dto';
import { PersonEmployment } from '../entities/person.entity';

export class PersonEmploymentService {
  public constructor(
    @Inject(CONSTANTS.REPOSITORY.PERSON_EMPLOYMENT)
    private readonly personEmploymentRepo: Repository<PersonEmployment>,
  ) {}

  public async findPersonEmploymentByFilter(
    filter: FindPersonEmploymentDto,
  ): Promise<PersonEmployment[]> {
    return this.personEmploymentRepo.find({
      where: filter,
    });
  }

  public findPersonEmploymentById(
    id: number,
  ): Promise<PersonEmployment | null> {
    return this.personEmploymentRepo.findOne({
      where: { id },
    });
  }

  public async createPersonEmployment(
    data: CreatePersonEmploymentDTO,
  ): Promise<number> {
    const obj = this.personEmploymentRepo.create({
      ...data,
    });

    await this.personEmploymentRepo.save(obj);

    return obj.id;
  }

  public async updatePersonEmployment(
    id: number,
    data: UpdatePersonEmploymentDTO,
  ): Promise<PersonEmployment> {
    await this.personEmploymentRepo.update(id, data);

    const obj = await this.personEmploymentRepo.findOne({
      where: { id },
    });

    return obj;
  }

  public async deletePersonEmploymentById(id: number): Promise<void> {
    await this.personEmploymentRepo.delete(id);
  }
}
