import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import "core-js/es/array";
import "core-js/es/object";

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.setBaseViewsDir(join(__dirname, '..', 'template'));
  app.useStaticAssets(join(__dirname, '..', 'react-app'));
  app.useStaticAssets(join(__dirname, '..', 'asset'));
  app.setViewEngine('hbs');
  app.enableCors();
  await app.listen(8888);
}
bootstrap();
