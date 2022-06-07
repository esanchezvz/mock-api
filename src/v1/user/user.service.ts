import { type User } from '.';
import users from './db';

export class UserService {
  public static async getAll(): Promise<User[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(users);
      }, 750);
    });
  }

  public static async findById(id: number): Promise<User | null> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(users.find((u) => u.id === id) || null);
      }, 750);
    });
  }
}
