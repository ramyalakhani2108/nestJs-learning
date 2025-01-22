import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { GetUsersParamDto } from '../dtos/get-users-param.dto';
import { AuthService } from 'src/auth/providers/auth.service';
import { Repository } from 'typeorm';
import { User } from '../user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from '../dtos/create-user.dto';

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
  ) {}

  /**
   * Method for creating a new user
   */
  public async createUser(createUserDto: CreateUserDto) {
    // check if the user already exists email
    const ExistingUser = await this.usersRepository.findOne({
      where: {
        email: createUserDto.email,
      },
    });
    // handle exception

    //create a new user
    let newUser = this.usersRepository.create(createUserDto);
    newUser = await this.usersRepository.save(newUser);
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
    // const isAuth = this.authService.isAuth();
    // console.log(isAuth);
    console.log(getUsersParamDto, limit, page);
    return [
      {
        firstName: 'ramya',
        email: 'ramya@gmail.com',
      },
      {
        firstName: 'ramesh',
        email: 'ramesh@gmail.com',
      },
      {
        firstName: 'raja',
        email: 'raja@gmail.com',
      },
    ];
  }

  /**
   * Find a single user using id from the database
   * @param id
   * @returns object {}
   */
  public async findOneById(id: number) {
    return await this.usersRepository.findOneBy({ id });
  }
}
