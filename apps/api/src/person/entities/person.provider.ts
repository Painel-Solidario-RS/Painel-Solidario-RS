import { CONSTANTS } from 'src/database/constants';
import { DataSource } from 'typeorm';
import { Person, VolunteerCategory } from './person.entity';

export const personProviders = [
  {
    provide: CONSTANTS.REPOSITORY.PERSON,
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Person),
    inject: [CONSTANTS.DATA_SOURCE],
  },
  {
    provide: CONSTANTS.REPOSITORY.VOLUNTEER_CATEGORY,
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(VolunteerCategory),
    inject: [CONSTANTS.DATA_SOURCE],
  },
];
