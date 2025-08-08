import request from 'supertest';
import app from '../app';

describe('API Endpoints', () => {
  it('GET /api/users should return user list', async () => {
    const res = await request(app).get('/api/users');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('users');
  });

  it('POST /api/users should create a new user', async () => {
    const res = await request(app).post('/api/users').send({ username: 'testuser', email: 'testuser@example.com', password: 'password123' });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('id');
  });
});