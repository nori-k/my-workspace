import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
// import {
//   FastifyAdapter,
//   NestFastifyApplication,
// } from '@nestjs/platform-fastify';
import { AppModule } from './app/app.module';

async function bootstrap() {
  // const app = await NestFactory.create<NestFastifyApplication>(
  //   AppModule,
  //   new FastifyAdapter(),
  //   { cors: { origin: '*', credentials: true }, rawBody: true }
  // );
  // const port = process.env.USER_SERVICE_PORT || 3032;
  const app = await NestFactory.create(AppModule);
  const port = process.env.USER_SERVICE_PORT || 3032;
  await app.listen(port);
  Logger.log(`👤User Service👤 is running on: http://localhost:${port}`);
}

bootstrap();
