import { Client } from 'pg';
import { expect } from 'chai';

describe('Database Unit Tests', () => {
  let client: Client;

  before(async () => {
    client = new Client({
      user: 'test',
      host: 'localhost',
      database: 'testdb',
      password: 'password',
      port: 5432,
    });
    await client.connect();
  });

  after(async () => {
    await client.end();
  });

  it('should create a new user', async () => {
    const res = await client.query('INSERT INTO users (username, password_hash, email) VALUES ($1, $2, $3) RETURNING id', ['testUser', 'hashedPassword', 'test@example.com']);
    expect(res.rows[0].id).to.be.a('number');
  });

  it('should retrieve a user by username', async () => {
    const res = await client.query('SELECT * FROM users WHERE username = $1', ['testUser']);
    expect(res.rows[0].username).to.equal('testUser');
  });

  it('should not allow duplicate usernames', async () => {
    try {
      await client.query('INSERT INTO users (username, password_hash, email) VALUES ($1, $2, $3)', ['testUser', 'anotherPassword', 'test2@example.com']);
    } catch (err) {
      expect(err.code).to.equal('23505');
    }
  });
});