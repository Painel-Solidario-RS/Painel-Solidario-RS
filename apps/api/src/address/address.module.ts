import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from 'src/database/database.module';
import { addressProviders } from './entities/address.provider';

@Module({
  imports: [ConfigModule, DatabaseModule],
  providers: [...addressProviders],
  exports: [...addressProviders],
})
export class AddressModule {}
