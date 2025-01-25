import { Inject, Injectable } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import jwtConfig from '../config/jwt.config';
import { ActiveUserData } from '../interfaces/active-user-data.interface';
import { User } from 'src/users/user.entity';

@Injectable()
export class GenerateTokensProvider {
  constructor(
    /**injecting jwt service */
    // @Inject(JwtService)
    private readonly jwtService: JwtService,

    @Inject(jwtConfig.KEY)
    private readonly jwtConfigurations: ConfigType<typeof jwtConfig>,
  ) {}

  public async signToken<T>(userId: number, expiersIn: number, payload?: T) {
    return await this.jwtService.signAsync(
      {
        sub: userId,
        ...payload,
      },
      {
        secret: this.jwtConfigurations.secret,
        audience: this.jwtConfigurations.audience,
        issuer: this.jwtConfigurations.issuer,
        expiresIn: expiersIn,
      },
    );
  }

  public async generateTokens(user: User) {
    // generate access Token
    const [accessToken, refreshToken] = await Promise.all([
      this.signToken<Partial<ActiveUserData>>(
        user.id,
        this.jwtConfigurations.accessTokenTtl,
        {
          email: user.email,
        },
      ),
      //generate refresh token
      this.signToken(user.id, this.jwtConfigurations.refreshTokenTtl),
    ]);
    return {
      accessToken,
      refreshToken,
    };
  } //this will wait till completion of the all promises
}
