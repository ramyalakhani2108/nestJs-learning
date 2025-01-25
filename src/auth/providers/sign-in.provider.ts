import {
  forwardRef,
  Inject,
  Injectable,
  RequestTimeoutException,
  UnauthorizedException,
} from '@nestjs/common';
import { SignInDto } from '../dtos/signin.dto';
import { UsersService } from 'src/users/providers/users.service';
import { HashingProvider } from './hashing.provider';
import { JwtService } from '@nestjs/jwt';
import { ConfigType } from '@nestjs/config';
import jwtConfig from '../config/jwt.config';
import { ActiveUserData } from '../interfaces/active-user-data.interface';

@Injectable()
export class SignInProvider {
  constructor(
    /**
     * inject users service
     */
    @Inject(forwardRef(() => UsersService))
    private readonly usersService: UsersService,

    /**
     * Injecting hashing provider
     */
    private readonly hashingProvider: HashingProvider,

    /**injecting jwt service */
    // @Inject(JwtService)
    private readonly jwtService: JwtService,

    @Inject(jwtConfig.KEY)
    private readonly jwtConfigurations: ConfigType<typeof jwtConfig>,
  ) {}

  public async signIn(signInDto: SignInDto) {
    const user = await this.usersService.findOneByEmail(signInDto.email);
    //compare the password

    let isEqual: boolean = false;

    try {
      isEqual = await this.hashingProvider.comparePassword(
        signInDto.password,
        user.password,
      );

      if (!isEqual) {
        throw new UnauthorizedException('Incorrect passwordd');
      }

      //sending confirmation
      const accessToken = await this.jwtService.signAsync(
        {
          sub: user.id,
          email: user.email,
        } as ActiveUserData,
        {
          secret: this.jwtConfigurations.secret,
          audience: this.jwtConfigurations.audience,
          issuer: this.jwtConfigurations.issuer,
          expiresIn: this.jwtConfigurations.accessTokenTtl,
        },
      );

      return {
        accessToken,
      };
    } catch (error) {
      throw new RequestTimeoutException(error, {
        description: 'Could not compare the passwords',
      });
    }
  }
}
