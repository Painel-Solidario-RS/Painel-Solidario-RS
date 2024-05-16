import { CONSTANTS } from 'src/database/constants';
import { DataSource } from 'typeorm';
import { User } from './user.entity';

export const userProviders = [
  {
    provide: CONSTANTS.REPOSITORY.USER,
    useFactory: (dataSource: DataSource) => dataSource.getRepository(User),
    inject: [CONSTANTS.DATA_SOURCE],
  },
];
