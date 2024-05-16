import { ConfigService } from '@nestjs/config';
import { DataSource } from 'typeorm';

export const databaseFactory = (configService: ConfigService) => {
  const dataSource = new DataSource({
    type: 'postgres',
    host: configService.getOrThrow<string>('POSTGRES_HOST'),
    port: Number(configService.getOrThrow<number>('POSTGRES_PORT')),
    username: configService.getOrThrow<string>('POSTGRES_USER'),
    password: configService.getOrThrow<string>('POSTGRES_PASSWORD'),
    database: configService.getOrThrow<string>('POSTGRES_DB'),
    entities: [__dirname + '/../**/*.entity{.ts,.js}'],
    synchronize: configService.getOrThrow<string>('NODE_ENV') === 'development',
  });

  return dataSource.initialize();
};
