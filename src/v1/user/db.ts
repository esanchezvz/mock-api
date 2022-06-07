import { faker } from '@faker-js/faker';
import { type User } from '.';

const getNumberBetween = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const createUser = (id: number): User => {
  const age = getNumberBetween(99, 18);
  const today = new Date();
  const dateOfBirth = new Date(
    today.getFullYear() - age,
    getNumberBetween(0, 11),
    getNumberBetween(1, 31)
  );

  return {
    id,
    age,
    avatar: faker.image.avatar(),
    bio: faker.lorem.paragraph(),
    country: faker.address.country(),
    dateOfBirth: dateOfBirth.toISOString(),
    email: faker.internet.email(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    phone: faker.phone.phoneNumber('+52 ## #### ####'),
  };
};

const users = new Array(100).fill(undefined).map((_, i) => createUser(i + 1));

export default users;
