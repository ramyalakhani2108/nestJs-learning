import { faker } from '@faker-js/faker';

export const CompleteUser = {
  firstName: faker.person.firstName(),
  lastName: faker.person.lastName(),
  email: faker.internet.email(),
  password: 'Password@dsS2123#',
};
export const MissingFirstName = {
  lastName: faker.person.lastName(),
  email: faker.internet.email(),
  password: 'Password@dsS2123#',
};
export const MissingEmail = {
  firstName: faker.person.firstName(),
  lastName: faker.person.lastName(),
  password: 'Password@dsS2123#',
};
export const MissingPassword = {
  firstName: faker.person.firstName(),
  email: faker.internet.email(),
  lastName: faker.person.lastName(),
};
