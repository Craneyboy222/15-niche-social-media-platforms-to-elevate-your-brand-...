import request from 'supertest';
import app from '../src/app';
import { expect } from 'chai';

describe('Database Integration Tests', () => {
  it('should create and retrieve a user via API', async () => {
    const userResponse = await request(app)
      .post('/api/users')
      .send({ username: 'apiUser', password: 'password', email: 'api@example.com' });
    expect(userResponse.status).to.equal(201);

    const listResponse = await request(app).get('/api/users');
    expect(listResponse.status).to.equal(200);
    expect(listResponse.body).to.have.lengthOf.at.least(1);
  });

  it('should handle login correctly', async () => {
    const loginResponse = await request(app)
      .post('/api/auth/login')
      .send({ username: 'apiUser', password: 'password' });
    expect(loginResponse.status).to.equal(200);
    expect(loginResponse.body.token).to.exist;
  });
});