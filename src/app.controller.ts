import { Controller } from '@nestjs/common';
import { AppService } from './app.service';

/**
 * The main application controller.
 * - This class handles incoming HTTP requests and delegates execution to the corresponding service methods.
 * - Decorated with `@Controller()` to indicate it is a controller in the NestJS framework.
 */
@Controller()
export class AppController {
  /**
   * Constructor for `AppController`.
   * - The `AppService` is injected via dependency injection to handle business logic.
   * @param appService - An instance of `AppService` that contains the business logic.
   */
  constructor(private readonly appService: AppService) {}
}
