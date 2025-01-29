import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { appCreate } from './app.create';

// import { DataResponseInterceptor } from './common/interceptors/data-response/data-response.interceptor';

/**
 * Bootstrap function for the app
 */
async function bootstrap() {
  // Creates an instance of the NestJS application by passing the AppModule.
  const app = await NestFactory.create(AppModule);

  // add Middleware
  appCreate(app);

  await app.listen(process.env.PORT ?? 3000);
}

bootstrap();
