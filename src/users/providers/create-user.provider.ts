import {
  BadRequestException,
  forwardRef,
  Inject,
  Injectable,
  RequestTimeoutException,
} from '@nestjs/common';
import { CreateUserDto } from '../dtos/create-user.dto';
import { User } from '../user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { HashingProvider } from 'src/auth/providers/hashing.provider';
import { MailService } from 'src/mail/providers/mail.service';

@Injectable()
export class CreateUserProvider {
  constructor(
    /**
     * Injecting user repo
     */
    @InjectRepository(User)
    private usersRepository: Repository<User>, // Corrected the typo here

    /**
     * Injecting hashing porvider
     */
    @Inject(forwardRef(() => HashingProvider))
    private readonly hashingProvider: HashingProvider,

    /**
     * Injecting mail service
     */
    private readonly mailService: MailService,
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
    let newUser = this.usersRepository.create({
      ...createUserDto,
      password: await this.hashingProvider.hashpassword(createUserDto.password),
    });
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

    try {
      await this.mailService.sendUserWelcomMail(newUser);
    } catch (error) {
      throw new RequestTimeoutException(error);
    }
    return newUser;
  }
}
