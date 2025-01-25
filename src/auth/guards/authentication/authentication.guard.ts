import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { AccessTokenGuard } from '../access-token/access-token.guard';
import { AuthType } from 'src/auth/enums/auth-type.enum';
import { AUTH_TYPE_KEY } from 'src/auth/constants/auth.constans';

@Injectable()
export class AuthenticationGuard implements CanActivate {
  private static readonly defaultAuthType = AuthType.Bearer;
  private readonly authTypeGuardMap: Record<
    AuthType,
    CanActivate | CanActivate[]
  > = {
    [AuthType.Bearer]: this.accessTokenGuard, //every auth type have access token guard to it
    [AuthType.None]: {
      canActivate: () => true, // if this is true then you can access the request otherwise request will be stopped
    }, //every auth type have access token guard to it
  };

  constructor(
    private readonly reflactor: Reflector,
    private readonly accessTokenGuard: AccessTokenGuard,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    //get all the auth types from the reflactor
    const authTypes = this.reflactor.getAllAndOverride<AuthType[]>(
      AUTH_TYPE_KEY,
      [
        context.getHandler(), // this method is responsible for getting all the meta values which have key, and have been assigned to handler methods of the class
        context.getClass(), // this method is responsible for getting all the meta values which have key, and have been assigned to class methods
      ],
    ) ?? [AuthenticationGuard.defaultAuthType];
    // array of all the guards assign the guard according to auth type
    const guards = authTypes.map((type) => this.authTypeGuardMap[type]).flat();

    // default
    let error = new UnauthorizedException();

    // loop through each guard use canActivate accordingly
    for (const instance of guards) {
      const canActivate = await Promise.resolve(
        // Here the AccessToken Guard Will be fired and check if user has permissions to acces
        // Later Multiple AuthTypes can be used even if one of them returns true
        // The user is Authorised to access the resource
        instance.canActivate(context),
      ).catch((err) => {
        error = err;
      });
      //in this case each of the guards will fire the can activate method and retur a boolean value
      if (canActivate) {
        return true; // if any of the guards return true then we can access the request
      }
    }
    throw error;
  }
}
