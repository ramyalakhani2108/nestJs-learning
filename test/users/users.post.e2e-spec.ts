import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { ConfigService } from '@nestjs/config';
import { dropDatabase } from 'test/helpers/drop-database.helper';
import { bootstrapNestApplication } from 'test/helpers/bootstrap-nest-application.helper';
import { App } from 'supertest/types';
import {
  CompleteUser,
  MissingEmail,
  MissingFirstName,
  MissingPassword,
} from './users.post.e2e-spec.sample-data';
describe('[Users] @Post Endpoints', () => {
  let app: INestApplication;
  let config: ConfigService;
  let httpServer: App;

  beforeEach(async () => {
    app = await bootstrapNestApplication();
    config = app.get<ConfigService>(ConfigService);
    // get server endpoint
    httpServer = app.getHttpServer();
  });

  afterEach(async () => {
    await dropDatabase(config);
    await app.close();
  });

  //   use this kind of todo while testing
  // it.todo('/users - Endpoint is public');
  it('/users - Endpoint is public', () => {
    return request(httpServer)
      .post('/users')
      .send(CompleteUser)
      .expect(201)
      .then(({ body }) => {
        // console.log({ body });
      });
  });

  // it.todo('/users - firstName is mandatory');
  it('/users - firstName is mandatory', () => {
    return request(httpServer)
      .post('/users')
      .send(MissingFirstName)
      .expect(400)
      .then(({ body }) => {
        // console.log({ body });
      });
  });
  // it.todo('/users - email is mandatory');
  it('/users - email is mandatory', () => {
    return request(httpServer)
      .post('/users')
      .send(MissingEmail)
      .expect(400)
      .then(({ body }) => {
        // console.log({ body });
      });
  });

  // it.todo('/users - password is mandatory');
  it('/users - password is mandatory', () => {
    return request(httpServer)
      .post('/users')
      .send(MissingPassword)
      .expect(400)
      .then(({ body }) => {
        // console.log({ body });
      });
  });
  // it.todo('/users - valid request successfully creates a new user');
  it('/users - valid request successfully creates a new user', () => {
    return request(httpServer)
      .post('/users')
      .send(CompleteUser)
      .expect(201)
      .then(({ body }) => {
        expect(body).toBeDefined();
        expect(body.data.email).toBe(CompleteUser.email);
        expect(body.data.firstName).toBe(CompleteUser.firstName);
        expect(body.data.lastName).toBe(CompleteUser.lastName);
      });
  });
  // it.todo('/users - password is not returned in response');
  it('/users - password is not returned in response', () => {
    return request(httpServer)
      .post('/users')
      .send(CompleteUser)
      .expect(201)
      .then(({ body }) => {
        expect(body).toBeDefined();
        expect(body.data.password).toBeUndefined();
      });
  });

  // it.todo('/users - googleId is not returned in response');
  it('/users - googleId is not returned in response', () => {
    return request(httpServer)
      .post('/users')
      .send(CompleteUser)
      .expect(201)
      .then(({ body }) => {
        expect(body).toBeDefined();
        expect(body.data.googleId).toBeUndefined();
      });
  });
});
