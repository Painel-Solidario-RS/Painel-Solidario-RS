import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { personProviders } from './entities/person.provider';
import { DatabaseModule } from 'src/database/database.module';
import { PersonController } from './person.controller';
import { PersonService } from './services/person.service';
import { AuthModule } from './modules/auth/auth.module';
import { PersonEntitiesController } from './person-entities.controller';
import { PersonEmploymentService } from './services/person-employment.service';
import { PersonActivityService } from './services/person-activity.service';
import { PersonShiftsService } from './services/person-shifts.service';
import { VolunteerCategoryService } from './services/volunteer-category.service';
import { AddressModule } from 'src/address/address.module';

@Module({
  imports: [ConfigModule, DatabaseModule, AuthModule, AddressModule],
  providers: [
    ...personProviders,
    PersonService,
    PersonShiftsService,
    PersonActivityService,
    PersonEmploymentService,
    VolunteerCategoryService,
  ],
  exports: [...personProviders, PersonService],
  controllers: [PersonController, PersonEntitiesController],
})
export class PersonModule {}
