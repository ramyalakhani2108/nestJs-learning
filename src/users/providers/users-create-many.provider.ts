import {
  ConflictException,
  Injectable,
  RequestTimeoutException,
} from '@nestjs/common';
import { User } from '../user.entity';
import { DataSource } from 'typeorm';
import { CreateManyUsersDto } from '../dtos/create-many-users.dto';

@Injectable()
export class UsersCreateManyProvider {
  constructor(private readonly dataSource: DataSource) {}
  public async createManyUsers(createManyUsersDto: CreateManyUsersDto) {
    const newUsers: User[] = [];
    //need a query runner instance
    const queryRunner = this.dataSource.createQueryRunner();
    try {
      //connect instance with our data source
      await queryRunner.connect();
      //start the transaction
      await queryRunner.startTransaction();
    } catch {
      throw new RequestTimeoutException('Could not connect to database');
    }
    //operations
    try {
      for (const user of createManyUsersDto.users) {
        const newUser = await queryRunner.manager.create(User, user);
        const result = await queryRunner.manager.save(newUser);
        newUsers.push(result);
      }
      //if successfull commit it
      await queryRunner.commitTransaction();
    } catch (error) {
      //if unsuccessfull rollback it
      await queryRunner.rollbackTransaction();
      throw new ConflictException('Could not complete the transaction.', {
        description: String(error),
      });
    } finally {
      //release the connection
      try {
        await queryRunner.release();
      } catch (e) {
        throw new RequestTimeoutException('Could not release connection', {
          description: String(e),
        });
      }
      return newUsers;
    }
  }
}
