require('dotenv').config();
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { useContainer } from 'class-validator';
import { TransferModule } from './transfer/transfer.module';
import { ReceiverModule } from './receiver/receiver.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();

  app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));
  useContainer(app.select(AppModule), { fallbackOnErrors: true });

  const config = new DocumentBuilder()
    .setTitle('Transfer API Example')
    .setDescription('The Transfer API description')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config, {
    include: [ReceiverModule, TransferModule],
  });

  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
