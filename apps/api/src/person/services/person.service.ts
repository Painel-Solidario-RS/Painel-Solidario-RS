import { Inject } from '@nestjs/common/decorators';
import { Address } from 'src/address/entities/address.entity';
import { CONSTANTS } from 'src/database/constants';
import { Repository } from 'typeorm';
import { CreatePersonDTO } from '../dtos/create-person.dto';
import { FindPersonDto } from '../dtos/find-person.dto';
import { UpdatePersonDTO } from '../dtos/update-person.dto';
import {
  Person,
  PersonActivity,
  PersonEmployment,
  PersonShifts,
  VolunteerCategory,
} from '../entities/person.entity';

export class PersonService {
  public constructor(
    @Inject(CONSTANTS.REPOSITORY.PERSON)
    private readonly personRepo: Repository<Person>,
    @Inject(CONSTANTS.REPOSITORY.ADDRESS)
    private readonly addressRepo: Repository<Address>,
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
      relations: [
        'address',
        'employment',
        'activities',
        'shifts',
        'categories',
      ],
    });
  }

  public async createPerson(data: CreatePersonDTO): Promise<number> {
    const person = this.mapDtoToEntity(data);
    person.address = await this.addressRepo.save(
      this.addressRepo.create(data.address),
    );

    await this.personRepo.save(person);
    return person.id;
  }

  public async updatePerson(
    id: number,
    data: UpdatePersonDTO,
  ): Promise<Person | null> {
    const {
      employmentId,
      volunteerCategoryIds,
      activityIds,
      shiftIds,
      address,
      ...rest
    } = data;

    //
    // TODO(Perin): Implement this logic to save/update/delete address
    //
    // const { address: currentAddress } = await this.personRepo.findOne({
    //   where: { id },
    //   relations: ['address'],
    // });

    // if (!currentAddress && address) {
    //   // Person doesn't have an address and we get one, so we create it
    //   const personAddress = await this.addressRepo.save(
    //     this.addressRepo.create(address),
    //   );
    //   person.address = personAddress;
    // } else if (currentAddress && !address) {
    //   // Person has an address and we don't get one, so we remove it
    //   await this.addressRepo.delete({ id: currentAddress.id });
    // } else if (currentAddress && address) {
    //   // Person has an address and we get one, so we update it
    //   await this.addressRepo.update(currentAddress.id, {
    //     ...currentAddress,
    //     ...address,
    //   });
    // }

    // Approach 1: Create related entities
    // const person = this.mapDtoToEntity(data);

    // Approach 2: Load related entities
    const person = {
      ...(await this.findPersonById(id)),
      ...rest,
      ...(await this.loadDtoRelatedEntities(data)),
    } satisfies Person;

    // Approach 3: Merge related entities
    // const person = this.personRepo.merge(await this.findPersonById(id), {
    //   employment,
    //   categories,
    //   activities,
    //   shifts,
    // });

    // Approach 4: Create new entity
    // const person = this.personRepo.create({
    //   ...rest,
    //   employment,
    //   categories,
    //   activities,
    //   shifts,
    // });

    await this.personRepo.update(id, person);
    return person;
  }

  public async deletePerson(id: number): Promise<void> {
    const { address } = await this.personRepo.findOne({
      where: { id },
      relations: ['address'],
    });

    await this.personRepo.delete(id);
    await this.addressRepo.delete({ id: address.id });
  }

  private async loadDtoRelatedEntities(
    data: CreatePersonDTO | UpdatePersonDTO,
  ): Promise<{
    employment: PersonEmployment;
    categories: VolunteerCategory[];
    activities: PersonActivity[];
    shifts: PersonShifts[];
  }> {
    const { employmentId, volunteerCategoryIds, activityIds, shiftIds } = data;

    const [employment, categories, activities, shifts] = await Promise.all([
      this.employmentRepo.findOne({
        where: { id: employmentId },
      }),
      volunteerCategoryIds
        ? Promise.all(
            volunteerCategoryIds.map((id) =>
              this.categoryRepo.findOne({ where: { id } }),
            ),
          )
        : [],
      activityIds
        ? Promise.all(
            activityIds.map((id) =>
              this.activityRepo.findOne({ where: { id } }),
            ),
          )
        : [],
      shiftIds
        ? Promise.all(
            shiftIds.map((id) => this.shiftRepo.findOne({ where: { id } })),
          )
        : [],
    ]);
    return { employment, categories, activities, shifts };
  }

  private mapDtoToEntity(data: CreatePersonDTO | UpdatePersonDTO) {
    const {
      employmentId,
      volunteerCategoryIds,
      activityIds,
      shiftIds,
      ...rest
    } = data;

    return this.personRepo.create({
      ...rest,
      employment: this.employmentRepo.create({ id: employmentId }),
      categories: volunteerCategoryIds?.map((id) =>
        this.categoryRepo.create({ id: id }),
      ),
      activities: activityIds?.map((id) =>
        this.activityRepo.create({ id: id }),
      ),
      shifts: shiftIds?.map((id) => this.shiftRepo.create({ id: id })),
    });
  }
}
