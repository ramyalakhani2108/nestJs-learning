import { DataSource } from 'typeorm';

export default new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'root',
  database: 'nestjs-blog',
  entities: ['**/*.entity.js'], //because we are running from the dist folder
  migrations: ['migrations/*.js'],
});
