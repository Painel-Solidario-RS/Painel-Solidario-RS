import { CONSTANTS } from 'src/database/constants';
import { DataSource } from 'typeorm';
import { Need } from './need.entity';

export const needProviders = [
  {
    provide: CONSTANTS.REPOSITORY.NEED,
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Need),
    inject: [CONSTANTS.DATA_SOURCE],
  },
];
