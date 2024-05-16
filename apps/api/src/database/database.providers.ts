import { ConfigService } from '@nestjs/config';
import { CONSTANTS } from './constants';
import { databaseFactory } from './database.factory';

export const databaseProviders = [
  {
    provide: CONSTANTS.DATA_SOURCE,
    useFactory: databaseFactory,
    inject: [ConfigService],
  },
];
