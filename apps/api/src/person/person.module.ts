import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { personProviders } from './entities/person.provider';
import { DatabaseModule } from 'src/database/database.module';
import { PersonController } from './person.controller';
import { PersonService } from './person.service';
import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [ConfigModule, DatabaseModule, AuthModule],
  providers: [...personProviders, PersonController, PersonService],
  exports: [...personProviders, PersonService],
  controllers: [PersonController],
})
export class PersonModule {}
