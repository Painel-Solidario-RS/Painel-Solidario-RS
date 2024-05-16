import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { PersonModule } from './person/person.module';
import { AddressModule } from './address/address.module';
import { ShelterModule } from './shelter/shelter.module';
import { NeedModule } from './need/need.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    DatabaseModule,
    PersonModule,
    AddressModule,
    ShelterModule,
    NeedModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
