import { version } from 'package.json';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from './common/validation.pipe';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT || 4000;

  app.useGlobalPipes(new ValidationPipe());
  app.enableCors({
    origin: '*',
    exposedHeaders: ['x-auth-token'],
  });

  const swaggerConfig = new DocumentBuilder()
    .setTitle('Painel Solidário')
    .setDescription('Bem vindo à documentação da API do Painel Solidário.')
    .setVersion(version)
    .addTag('Pessoas')
    .addTag('Abrigos')
    .addTag('Necessidades')
    .build();

  const swaggerDocument = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('/api-docs', app, swaggerDocument);

  await app.listen(port);
  console.log(`App listening on port ${port}`);
}
bootstrap();
