import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { use } from 'passport';
import { ValidationPipe } from '@nestjs/common';
import * as dotenv from 'dotenv';
import * as cors from 'cors'; 

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.use(
    cors({
      // origin: 'http://localhost:3000', // Allow requests only from this origin
      // credentials: true, // Allow including credentials (cookies, authorization headers, etc.)
    }),
  );
  await app.listen(4000);
}
bootstrap();
