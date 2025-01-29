import { Test, TestingModule } from '@nestjs/testing';
import { CreateUserProvider } from './create-user.provider';
import { MailService } from 'src/mail/providers/mail.service';
import { HashingProvider } from 'src/auth/providers/hashing.provider';
import { DataSource, Repository } from 'typeorm';
import { getRepositoryToken } from '@nestjs/typeorm';
import { User } from '../user.entity';
import { BadRequestException } from '@nestjs/common';

type MockRepository<T = any> = Partial<Record<keyof Repository<T>, jest.Mock>>;
const createMockRepository = <T = any>(): MockRepository<T> => ({
  findOne: jest.fn(),
  create: jest.fn(),
  save: jest.fn(),
});
describe('CreateUserProvider', () => {
  let provider: CreateUserProvider;
  let usersRepository: MockRepository;
  const user = {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    password: 'hashedPassword',
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CreateUserProvider,
        {
          provide: MailService,
          useValue: {
            sendUserWelcomeMail: jest.fn(() => Promise.resolve()),
          },
        },
        {
          provide: HashingProvider,
          useValue: {
            hashpassword: jest.fn(() => user.password),
          },
        },
        {
          provide: DataSource,
          useValue: {},
        },
        {
          provide: getRepositoryToken(User),
          useValue: createMockRepository(),
        },
      ],
    }).compile();

    // get the provider
    provider = module.get<CreateUserProvider>(CreateUserProvider);
    usersRepository = module.get(getRepositoryToken(User));
  });

  describe('root', () => {
    it('Provider should be exist', () => {
      expect(provider).toBeDefined();
    });
  });

  describe('createUser', () => {
    describe("When the user doesn't exist in the database", () => {
      it('should create a new user', async () => {
        usersRepository.findOne.mockReturnValue(null);
        usersRepository.create.mockReturnValue(user);
        usersRepository.save.mockReturnValue(user);
        const newUser = await provider.createUser(user);
        expect(usersRepository.findOne).toHaveBeenCalledWith({
          where: {
            email: user.email,
          },
        });
        expect(usersRepository.create).toHaveBeenCalledWith(user);
        expect(usersRepository.save).toHaveBeenCalledWith(user);
      });
    });
    describe('When the does exist in the database', () => {
      it('it should throw an bad request exception', async () => {
        usersRepository.findOne.mockReturnValue(user.email);
        usersRepository.create.mockReturnValue(user);
        usersRepository.save.mockReturnValue(user);
        try {
          const newUser = await provider.createUser(user);
        } catch (error) {
          expect(error).toBeInstanceOf(BadRequestException);
        }
      });
    });
  });
});
