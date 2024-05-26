import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { personProviders } from './entities/person.provider';
import { DatabaseModule } from 'src/database/database.module';
import { PersonController } from './person.controller';
import { PersonService } from './person.service';
import { AuthModule } from './modules/auth/auth.module';
import { PersonEntitiesController } from './person.entities.controller';

@Module({
  imports: [ConfigModule, DatabaseModule, AuthModule],
  providers: [...personProviders, PersonService],
  exports: [...personProviders, PersonService],
  controllers: [PersonController, PersonEntitiesController],
})
export class PersonModule {}
