import { Inject } from '@nestjs/common/decorators';
import { CONSTANTS } from 'src/database/constants';
import { Repository } from 'typeorm';
import { FindPersonShiftsDto } from '../dtos/find-person.dto';
import { PersonShifts } from '../entities/person.entity';
import { CreatePersonShiftsDTO } from '../dtos/create-person.dto';
import { UpdatePersonShiftsDTO } from '../dtos/update-person.dto';

export class PersonShiftsService {
  public constructor(
    @Inject(CONSTANTS.REPOSITORY.PERSON_SHIFT)
    private readonly personShiftsRepo: Repository<PersonShifts>,
  ) {}

  public async findPersonShiftsByFilter(
    filter: FindPersonShiftsDto,
  ): Promise<PersonShifts[]> {
    return this.personShiftsRepo.find({
      where: filter,
    });
  }

  public findPersonShiftsById(id: number): Promise<PersonShifts | null> {
    return this.personShiftsRepo.findOne({
      where: { id },
    });
  }

  public async createPersonShifts(
    data: CreatePersonShiftsDTO,
  ): Promise<number> {
    const obj = this.personShiftsRepo.create({
      ...data,
    });

    await this.personShiftsRepo.save(obj);

    return obj.id;
  }

  public async updatePersonShifts(
    id: number,
    data: UpdatePersonShiftsDTO,
  ): Promise<PersonShifts> {
    await this.personShiftsRepo.update(id, data);

    const obj = await this.personShiftsRepo.findOne({
      where: { id },
    });

    return obj;
  }

  public async deletePersonShiftsById(id: number): Promise<void> {
    await this.personShiftsRepo.delete(id);
  }
}
