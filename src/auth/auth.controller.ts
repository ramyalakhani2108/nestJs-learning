import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from './providers/auth.service';
import { SignInDto } from './dtos/signin.dto';
import { Auth } from './decorators/auth.decorator';
import { AuthType } from './enums/auth-type.enum';

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

  @Post('sign-in')
  @HttpCode(HttpStatus.OK)
  @Auth(AuthType.None)
  public async singIn(@Body() signInDto: SignInDto) {
    return await this.authService.signIn(signInDto);
  }
}
