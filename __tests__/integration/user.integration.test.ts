import request from 'supertest';
import app from '../../app';

describe('User Integration Tests', () => {
  it('should create and retrieve a user', async () => {
    const userData = { username: 'integrationUser', email: 'integrationUser@example.com', password: 'password123' };
    const createRes = await request(app).post('/api/users').send(userData);
    expect(createRes.statusCode).toEqual(201);

    const userId = createRes.body.id;
    const retrieveRes = await request(app).get(`/api/users/${userId}`);
    expect(retrieveRes.statusCode).toEqual(200);
    expect(retrieveRes.body.username).toBe('integrationUser');
  });
});