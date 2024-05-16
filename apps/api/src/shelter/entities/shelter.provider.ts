import { CONSTANTS } from 'src/database/constants';
import { DataSource } from 'typeorm';
import { Shelter } from './shelter.entity';

export const shelterProviders = [
  {
    provide: CONSTANTS.REPOSITORY.SHELTERS,
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Shelter),
    inject: [CONSTANTS.DATA_SOURCE],
  },
];
