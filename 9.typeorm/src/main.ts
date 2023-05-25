import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // DTO 맴버가 아니면 전달자체가 되지 않는 옵션.
      forbidNonWhitelisted: true, // DTO 맴버가 아니면 요청을 막을 수 있음. error 를 반환 (whitelist: true와 같이 사용해야함.)
      transform: true,
    }),
  );
  await app.listen(3000);
}
bootstrap();
