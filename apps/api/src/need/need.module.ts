import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { needProviders } from './entities/need.provider';
import { DatabaseModule } from 'src/database/database.module';
import { NeedService } from './services/need.service';
import { NeedController } from './controllers/need.controller';

@Module({
  imports: [ConfigModule, DatabaseModule],
  providers: [...needProviders, NeedService],
  exports: [...needProviders, NeedService],
  controllers: [NeedController],
})
export class NeedModule {}
