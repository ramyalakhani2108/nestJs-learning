import { ConfigService } from '@nestjs/config';
import { DataSource } from 'typeorm';

export async function dropDatabase(
  configService: ConfigService,
): Promise<void> {
  // create the connection to datasource
  const AppDataSource = await new DataSource({
    type: 'postgres',
    // entities: [User, Post, Tag, MetaOption],
    synchronize: configService.get<boolean>('database.synchronize'),
    port: configService.get<number>('database.port'), //database.config
    username: configService.get<string>('database.user'),
    password: configService.get<string>('database.password'),
    host: configService.get<string>('database.host'),
    database: configService.get<string>('database.name'),
  }).initialize();
  // drop all the tables
  await AppDataSource.dropDatabase();
  // close the connection
  await AppDataSource.destroy(); //terminating the connection
}
