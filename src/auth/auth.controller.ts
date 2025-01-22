import { Controller } from '@nestjs/common';
import { AuthService } from './providers/auth.service';

/**
 * Controller that handles authentication-related endpoints.
 *
 * This controller exposes routes for user authentication, such as login and status checks.
 */
@Controller('auth')
export class AuthController {
  /**
   * @param authService The injected `AuthService` used for handling the authentication logic.
   */
  constructor(private readonly authService: AuthService) {}
}
