import request from 'supertest';
import app from '../../app';

describe('Authentication Integration Tests', () => {
  it('should register and authenticate a new user', async () => {
    const userData = { username: 'integrationTestUser', email: 'integration@example.com', password: 'password123' };
    const registerRes = await request(app).post('/api/users').send(userData);
    expect(registerRes.statusCode).toEqual(201);

    const loginRes = await request(app).post('/api/auth/login').send({ email: 'integration@example.com', password: 'password123' });
    expect(loginRes.statusCode).toEqual(200);
    expect(loginRes.body).toHaveProperty('token');
  });
});