import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { shelterProviders } from './entities/shelter.provider';
import { DatabaseModule } from 'src/database/database.module';
import { ShelterService } from './services/shelter.service';
import { ShelterController } from './controllers/shelter.controller';
import { addressProviders } from 'src/address/entities/address.provider';

@Module({
  imports: [ConfigModule, DatabaseModule],
  providers: [...shelterProviders, ...addressProviders, ShelterService],
  exports: [...shelterProviders, ShelterService],
  controllers: [ShelterController],
})
export class ShelterModule {}
