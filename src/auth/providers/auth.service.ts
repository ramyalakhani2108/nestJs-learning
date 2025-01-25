import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/providers/users.service';
import { SignInDto } from '../dtos/signin.dto';
import { SignInProvider } from './sign-in.provider';

/**
 * Service responsible for authentication-related operations.
 *
 * This service handles operations such as logging in and checking authentication status.
 */
@Injectable()
export class AuthService {
  /**
   * @param userService The injected `UsersService` which is used to interact with the user data.
   * The `forwardRef` and `Inject` decorators are used to resolve circular dependency issues between `AuthService` and `UsersService`.
   */
  constructor(
    @Inject(forwardRef(() => UsersService))
    private readonly userService: UsersService,

    /**Inject signin provider */
    private readonly signInProvider: SignInProvider,
  ) {}

  /**
   * Simulates a login process and generates a token.
   *
   * @param email User's email address.
   * @param password User's password.
   * @returns A token (for now, it returns a placeholder string).
   */
  public async signIn(signInDto: SignInDto) {
    return await this.signInProvider.signIn(signInDto);
  }

  /**
   * Simulates checking if a user is authenticated.
   *
   * @returns A boolean indicating whether the user is authenticated. (Currently always returns true, will be updated with actual logic).
   */
  public isAuth() {
    return true; // this will be replaced with actual logic to check authentication
  }
}
