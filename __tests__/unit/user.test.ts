import { getUserById, createUser } from '../services/user';
import { jest } from '@jest/globals';

describe('User Service', () => {
  it('should retrieve a user by ID', async () => {
    const userId = 1;
    const user = await getUserById(userId);
    expect(user).toHaveProperty('id', userId);
  });

  it('should create a new user', async () => {
    const userData = { username: 'newuser', email: 'newuser@example.com', password: 'password123' };
    const user = await createUser(userData);
    expect(user).toHaveProperty('id');
    expect(user.username).toBe('newuser');
  });
});