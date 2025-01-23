import {
  BadRequestException,
  forwardRef,
  HttpException,
  HttpStatus,
  Inject,
  Injectable,
  RequestTimeoutException,
} from '@nestjs/common';
import { GetUsersParamDto } from '../dtos/get-users-param.dto';
import { AuthService } from 'src/auth/providers/auth.service';
import { Repository } from 'typeorm';
import { User } from '../user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from '../dtos/create-user.dto';
import { ConfigType } from '@nestjs/config';
import profileConfig from '../config/profile.config';

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
    @Inject(forwardRef(() => AuthService))
    private readonly authService: AuthService,
    @InjectRepository(User)
    private usersRepository: Repository<User>, // Corrected the typo here

    @Inject(profileConfig.KEY) //need to remember this KEY word
    private readonly profileConfiguration: ConfigType<typeof profileConfig>,
  ) {}

  /**
   * Method for creating a new user
   */
  public async createUser(createUserDto: CreateUserDto) {
    let existingUser = undefined;
    try {
      // check if the user already exists email
      existingUser = await this.usersRepository.findOne({
        where: {
          email: createUserDto.email,
        },
      });
    } catch (error) {
      throw new RequestTimeoutException(
        'Unable to process your request at the moment please try later',
        {
          description: 'error connecting to the db',
          cause: error,
        },
      );
    }

    // handle exception
    if (existingUser) {
      throw new BadRequestException(
        'The user is already exist please check your email',
      );
    }
    //create a new user
    let newUser = this.usersRepository.create(createUserDto);
    try {
      newUser = await this.usersRepository.save(newUser);
    } catch (error) {
      throw new RequestTimeoutException(
        'Unable to process your request at the moment please try later',
        {
          description: 'error saving user to the db',
          cause: error,
        },
      );
    }
    return newUser;
  }

  /**
   *  This method is for call the all users from the database
   */
  public findAll(
    getUsersParamDto: GetUsersParamDto,
    limit: number,
    page: number,
  ) {
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
}
