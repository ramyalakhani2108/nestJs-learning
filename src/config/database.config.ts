import { registerAs } from '@nestjs/config';

/* 
 I want to say that all the properties in the object that are returned from this particular file

itself should be available to me under the name of database. */
export default registerAs('database', () => ({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASSWORD || 'root',
  name: process.env.DB_NAME || 'nestjs-blog',
  port: parseInt(process.env.DB_PORT) || 5432,
  synchronize: process.env.DB_SYNC === 'true',
  autoLoadEntities: process.env.DB_AUTO_LOAD === 'true',
}));
