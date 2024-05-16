import { CONSTANTS } from 'src/database/constants';
import { DataSource } from 'typeorm';
import { Address } from './address.entity';

export const addressProviders = [
  {
    provide: CONSTANTS.REPOSITORY.ADDRESS,
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Address),
    inject: [CONSTANTS.DATA_SOURCE],
  },
];
