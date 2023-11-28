import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
const cors = require('cors');


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.use(cors());
  app.setGlobalPrefix('api');
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(5000);
}
bootstrap();
