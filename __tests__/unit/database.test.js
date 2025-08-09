"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const chai_1 = require("chai");
describe('Database Unit Tests', () => {
    let client;
    before(async () => {
        client = new pg_1.Client({
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
        (0, chai_1.expect)(res.rows[0].id).to.be.a('number');
    });
    it('should retrieve a user by username', async () => {
        const res = await client.query('SELECT * FROM users WHERE username = $1', ['testUser']);
        (0, chai_1.expect)(res.rows[0].username).to.equal('testUser');
    });
    it('should not allow duplicate usernames', async () => {
        try {
            await client.query('INSERT INTO users (username, password_hash, email) VALUES ($1, $2, $3)', ['testUser', 'anotherPassword', 'test2@example.com']);
        }
        catch (err) {
            (0, chai_1.expect)(err.code).to.equal('23505');
        }
    });
});
