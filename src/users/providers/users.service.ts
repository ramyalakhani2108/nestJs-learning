import {
  BadRequestException,
  HttpException,
  HttpStatus,
  Injectable,
  RequestTimeoutException,
} from '@nestjs/common';
// import { GetUsersParamDto } from '../dtos/get-users-param.dto';
import { Repository } from 'typeorm';
import { User } from '../user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersCreateManyProvider } from './users-create-many.provider';
import { CreateManyUsersDto } from '../dtos/create-many-users.dto';
import { CreateUserProvider } from './create-user.provider';
import { CreateUserDto } from '../dtos/create-user.dto';
import { FindOneUserByEmailProvider } from './find-one-user-by-email.provider';
import { GoogleIdProvider } from 'src/users/providers/google-id.provider';
import { CreateGoogleUserProvider } from './create-google-user.provider';
import { GoogleUser } from '../interfaces/google-user.interface';

/**
 * Class to connect users table and perform business operations
 */
@Injectable()
export class UsersService {
  /**
   * Constructor for the user service
   * @param authService
   */
  constructor(
    // @Inject(forwardRef(() => AuthService))
    // private readonly authService: AuthService,
    @InjectRepository(User)
    private usersRepository: Repository<User>, // Corrected the typo here

    // @Inject(profileConfig.KEY) //need to remember this KEY word
    // private readonly profileConfiguration: ConfigType<typeof profileConfig>,

    // private readonly dataSource: DataSource,

    private readonly usersCreateManyProvider: UsersCreateManyProvider,

    /**
     * Find One user by email provider
     */
    private readonly findOneByEmailProvider: FindOneUserByEmailProvider,

    /**
     * injecting create user provider
     */
    private readonly createUserProvider: CreateUserProvider,

    /**
     * inject findonebygoogleid provider
     */
    private readonly findOneByGoogleIdProvider: GoogleIdProvider,

    /**
     * inject google user provider
     */
    private readonly createGoogleUserProvider: CreateGoogleUserProvider,
  ) {}

  public async createUser(createUserDto: CreateUserDto) {
    return await this.createUserProvider.createUser(createUserDto);
  }
  /**
   *  This method is for call the all users from the database
   */
  public findAll() {
    // page: number, // limit: number, // getUsersParamDto: GetUsersParamDto,
    throw new HttpException(
      {
        status: HttpStatus.MOVED_PERMANENTLY,
        error: 'The Api Endpoint does not exist',
        fileName: 'user.service.ts', //use with caution
        lineNumber: 90,
      },
      HttpStatus.MOVED_PERMANENTLY,
      {
        //for loggin the exception this is not being sent to the user
        cause: new Error(),
        description: 'The Api end point is not working properly',
      },
    );
  }

  /**
   * Find a single user using id from the database
   * @param id
   * @returns object {}
   */
  public async findOneById(id: number) {
    let user = undefined;
    try {
      user = await this.usersRepository.findOneBy({ id });
    } catch (err) {
      throw new RequestTimeoutException(
        'Unable to process your request at the moment please try later',
        {
          description: 'error connecting to the db',
          cause: err,
        },
      );
    }

    if (!user) {
      throw new BadRequestException('User not found with given id');
    }
    return user;
  }

  public async createManyUsers(createManyUsersDto: CreateManyUsersDto) {
    return await this.usersCreateManyProvider.createManyUsers(
      createManyUsersDto,
    );
  }

  public async findOneByEmail(email: string) {
    return await this.findOneByEmailProvider.findUserByEmail(email);
  }

  public async findOneByGoogleId(googleId: string) {
    return await this.findOneByGoogleIdProvider.findOneByGoogleId(googleId);
  }

  public async createGoogleUser(googleUser: GoogleUser) {
    return await this.createGoogleUserProvider.createGoogleUser(googleUser);
  }
}
