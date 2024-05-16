import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from './common/validation.pipe';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = 3000;

  app.useGlobalPipes(new ValidationPipe());
  app.enableCors({
    origin: '*',
    exposedHeaders: ['x-auth-token'],
  });

  await app.listen(port);
  console.log(`App listening on port ${port}`);
}
bootstrap();
