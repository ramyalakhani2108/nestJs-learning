import {
  forwardRef,
  Inject,
  Injectable,
  OnModuleInit,
  UnauthorizedException,
} from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { OAuth2Client } from 'google-auth-library';
import { GoogleTokenDto } from '../dtos/google-token.dto';
import jwtConfig from 'src/auth/config/jwt.config';
import { UsersService } from 'src/users/providers/users.service';
import { GenerateTokensProvider } from 'src/auth/providers/generate-tokens.provider';

@Injectable()
export class GoogleAuthenticationService implements OnModuleInit {
  private oauthClient: OAuth2Client;
  constructor(
    /**injecting jwt service */
    // @Inject(JwtService)
    private readonly jwtService: JwtService,

    @Inject(jwtConfig.KEY)
    private readonly jwtConfigurations: ConfigType<typeof jwtConfig>,

    /**
     * Inject user service
     */
    @Inject(forwardRef(() => UsersService))
    private readonly userService: UsersService,

    /**
     * inject genereate token provider
     */
    private readonly generateTokensProvider: GenerateTokensProvider,
  ) {}

  onModuleInit() {
    const clientId = this.jwtConfigurations.googleClientId;
    const clientSecret = this.jwtConfigurations.googleClientSecret;

    this.oauthClient = new OAuth2Client(clientId, clientSecret);
  }

  public async authenticate(googleTokenDto: GoogleTokenDto) {
    try {
      //verify the google token
      const loginTicket = await this.oauthClient.verifyIdToken({
        idToken: googleTokenDto.token,
      });
      // extract the payload from the google token
      const {
        email,
        sub: googleId,
        given_name: firstName,
        family_name: lastName,
      } = loginTicket.getPayload();
      // find the user using the googleId

      const user = await this.userService.findOneByGoogleId(googleId);

      //generate new auth and refresh token
      if (user) {
        return this.generateTokensProvider.generateTokens(user);
      }

      //if not found create a new one and generate new atuh and refresh token
      const newUser = await this.userService.createGoogleUser({
        email: email,
        firstName: firstName,
        lastName: lastName,
        googleId: googleId,
      });

      return await this.generateTokensProvider.generateTokens(newUser);
    } catch (err) {
      //throw unauthorization exceptino
      throw new UnauthorizedException(err);
    }
  }
}
