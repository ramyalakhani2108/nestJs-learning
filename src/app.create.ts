import { INestApplication, ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export function appCreate(app: INestApplication) {
  // using global pipes so we don't need to add this again and again
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // to prevent accepting any other params which is not specified into dots and it doesn't stop the req,
      forbidNonWhitelisted: true, //stops processing further if property is not whitelisted
      transform: true, // transforms the object into dto class object
      transformOptions: {
        enableImplicitConversion: true, //validation pipe will take care of implicit conversion type so you dont have to write @Type everywhere
      },
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

  //allowing cors
  app.enableCors();

  // global interceptors
  // app.useGlobalInterceptors(new DataResponseInterceptor());
}
