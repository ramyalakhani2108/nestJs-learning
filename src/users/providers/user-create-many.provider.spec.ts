import { Test, TestingModule } from '@nestjs/testing';
import { UsersCreateManyProvider } from './users-create-many.provider';
import { DataSource, EntityManager, QueryRunner } from 'typeorm';
import { User } from '../user.entity';
import { CreateManyUsersDto } from '../dtos/create-many-users.dto';

describe('UserCreateManyProvider', () => {
  let provider: UsersCreateManyProvider;
  let mockDataSource: jest.Mocked<DataSource>;
  let mockedQueryRunner: jest.Mocked<QueryRunner>;
  beforeEach(async () => {
    const mockEntityManager: jest.Mocked<EntityManager> = {
      create: jest.fn(
        (entity: typeof User, data: Partial<User>) => data as User,
      ),
    } as unknown as jest.Mocked<EntityManager>;

    mockedQueryRunner = {
      connect: jest.fn().mockResolvedValue(undefined),
      startTransaction: jest.fn().mockResolvedValue(undefined),
      commitTransaction: jest.fn().mockResolvedValue(undefined),
      rollbackTransaction: jest.fn().mockResolvedValue(undefined),
      release: jest.fn().mockResolvedValue(undefined),
      manager: mockEntityManager,
    } as unknown as jest.Mocked<QueryRunner>;

    mockDataSource = {
      createQueryRunner: jest.fn().mockReturnValue(mockedQueryRunner),
    } as unknown as jest.Mocked<DataSource>;

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersCreateManyProvider,
        {
          provide: DataSource,
          useValue: {},
        },
      ],
    }).compile();

    provider = module.get<UsersCreateManyProvider>(UsersCreateManyProvider);
  });

  describe('root', () => {
    it('UsersCreateManyProvider should be defined', () => {
      expect(provider).toBeDefined();
    });
  });

  describe('should create multiple users successfully', async () => {
    const user: CreateManyUsersDto = {
      users: [
        {
          firstName: 'Ramya',
          lastName: 'Lakhani',
          email: 'rssqamwsya.laksshani.us@gmail.com',
          password: 'Hello@1234',
        },
        {
          firstName: 'John',
          lastName: 'Doe',
          email: 'johwwsn.dosse.u@gmail.com',
          password: 'Hsi@5678',
        },
      ],
    };
    const result = await provider.createManyUsers(user);

    expect(mockedQueryRunner.connect).toHaveBeenCalledTimes(1);
    expect(mockedQueryRunner.startTransaction).toHaveBeenCalledTimes(1);
    expect(mockedQueryRunner.manager.create).toHaveBeenCalledTimes(2);
    expect(mockedQueryRunner.manager.save).toHaveBeenCalledTimes(2);
  });
});
