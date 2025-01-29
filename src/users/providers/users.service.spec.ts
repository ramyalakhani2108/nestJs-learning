import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';
import { UsersCreateManyProvider } from './users-create-many.provider';
import { FindOneUserByEmailProvider } from './find-one-user-by-email.provider';
import { CreateUserProvider } from './create-user.provider';
import { GoogleIdProvider } from './google-id.provider';
import { CreateGoogleUserProvider } from './create-google-user.provider';
import { DataSource } from 'typeorm';
import { getRepositoryToken } from '@nestjs/typeorm';
import { User } from '../user.entity';
import { CreateUserDto } from '../dtos/create-user.dto';

describe('UsersService', () => {
  let service: UsersService;
  beforeEach(async () => {
    const mockCreateUserProvider: Partial<CreateUserProvider> = {
      createUser: (createUserDto: CreateUserDto) =>
        Promise.resolve({
          id: 12,
          firstName: createUserDto.firstName,
          lastName: createUserDto.lastName,
          email: createUserDto.email,
          password: createUserDto.password,
        }),
    };
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,

        {
          provide: CreateUserProvider,
          useValue: mockCreateUserProvider,
        },
        {
          provide: DataSource,
          useValue: {},
        },
        {
          provide: getRepositoryToken(User),
          useValue: {},
        },
        {
          provide: UsersCreateManyProvider,
          useValue: {},
        },
        {
          provide: FindOneUserByEmailProvider,
          useValue: {},
        },
        {
          provide: GoogleIdProvider,
          useValue: {},
        },
        {
          provide: CreateGoogleUserProvider,
          useValue: {},
        },
      ],
    }).compile();

    service = module.get<UsersService>(UsersService);
  });

  describe('root', () => {
    it('Service should be exist', () => {
      expect(service).toBeDefined();
    });
  });

  describe('create user', () => {
    it('should be defined', () => {
      expect(service.createUser).toBeDefined();
    });
    it('Should call createUser method inside createUserProvider', async () => {
      const user = await service.createUser({
        firstName: 'John Doe',
        lastName: 'Doe',
        email: 'johndoe@example.com',
        password: 'password123',
      });
      expect(user.firstName).toEqual('John Doe');
    });
  });
});
