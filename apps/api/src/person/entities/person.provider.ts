import { CONSTANTS } from 'src/database/constants';
import { DataSource } from 'typeorm';
import {
  Person,
  PersonActivity,
  PersonEmployment,
  PersonShifts,
  VolunteerCategory,
} from './person.entity';

export const personProviders = [
  {
    provide: CONSTANTS.REPOSITORY.PERSON,
    useFactory: (ds: DataSource) => ds.getRepository(Person),
    inject: [CONSTANTS.DATA_SOURCE],
  },
  {
    provide: CONSTANTS.REPOSITORY.PERSON_SHIFT,
    useFactory: (ds: DataSource) => ds.getRepository(PersonShifts),
    inject: [CONSTANTS.DATA_SOURCE],
  },
  {
    provide: CONSTANTS.REPOSITORY.PERSON_ACTIVITY,
    useFactory: (ds: DataSource) => ds.getRepository(PersonActivity),
    inject: [CONSTANTS.DATA_SOURCE],
  },
  {
    provide: CONSTANTS.REPOSITORY.PERSON_EMPLOYMENT,
    useFactory: (ds: DataSource) => ds.getRepository(PersonEmployment),
    inject: [CONSTANTS.DATA_SOURCE],
  },
  {
    provide: CONSTANTS.REPOSITORY.VOLUNTEER_CATEGORY,
    useFactory: (ds: DataSource) => ds.getRepository(VolunteerCategory),
    inject: [CONSTANTS.DATA_SOURCE],
  },
];
