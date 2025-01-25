import {
  CanActivate,
  ExecutionContext,
  Inject,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';
import { Observable } from 'rxjs';
import jwtConfig from 'src/auth/config/jwt.config';
import { REQUEST_USER_KEY } from 'src/auth/constants/auth.constans';

@Injectable()
export class AccessTokenGuard implements CanActivate {
  constructor(
    /**
     * injecting jwt service
     */
    private readonly jwtService: JwtService,

    /**
     * inject jwt configuration
     */
    @Inject(jwtConfig.KEY)
    private readonly jwtConfigurations: ConfigType<typeof jwtConfig>,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    //Extract the request form execution context
    const request = context.switchToHttp().getRequest();

    // extract the token from the header
    const token = this.extractRequest(request);
    // validate the token
    if (!token) {
      throw new UnauthorizedException('token not found');
    }

    try {
      const payload = await this.jwtService.verifyAsync(
        token,
        this.jwtConfigurations,
      );

      request[REQUEST_USER_KEY] = payload;
    } catch {
      throw new UnauthorizedException('Invalid token');
    }

    return true;
  }

  private extractRequest(request: Request) {
    const [_, token] = request.headers.authorization?.split(' ') ?? [];
    return token;
  }
}
