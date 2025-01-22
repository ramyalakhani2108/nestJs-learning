import { Injectable } from '@nestjs/common';

/**
 * AppService is a basic service that handles business logic for the application.
 * It provides a simple method to return a greeting message.
 */
@Injectable()
export class AppService {
  /**
   * AppService is a basic service that handles business logic for the application.
   * @returns A greeting message that says "Hello From Ramya!"
   */
  getHello(): string {
    return 'Hello From Ramya!';
  }
}
