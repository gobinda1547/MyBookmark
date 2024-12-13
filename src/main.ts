import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  // here we are initializing our application
  const app = await NestFactory.create(AppModule);

  // here we are launching our server on port 3333
  await app.listen(process.env.PORT ?? 3333);
}
bootstrap();
