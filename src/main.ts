import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

/**
 * Boostrap functino for the app
 */
async function bootstrap() {
  // Creates an instance of the NestJS application by passing the AppModule.
  const app = await NestFactory.create(AppModule);
  // using global pipes so we dont need to add this again and again
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // to prevent accepting any other params which is not specified into dots and it doesn't stop the req,
      forbidNonWhitelisted: true, //stops processing further if property is not whitelisted
      transform: true, // transforms the object into dto class object
    }),
  );

  // swagger configuration
  const config = new DocumentBuilder()
    .setTitle('Nest Js Blogging Application')
    .setDescription('Api-url: http://localhost:3000/')
    .setTermsOfService('http://localhost:3000/')
    .setLicense('MIT License', '')
    .addServer('http://localhost:3000/')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(process.env.PORT ?? 3000);
}

bootstrap();
