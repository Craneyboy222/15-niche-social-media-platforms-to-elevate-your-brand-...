"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const auth_1 = require("../services/auth");
describe('Authentication Service', () => {
    it('should register a new user', async () => {
        const userData = { username: 'testuser', email: 'test@example.com', password: 'password123' };
        const result = await (0, auth_1.registerUser)(userData);
        expect(result).toHaveProperty('id');
        expect(result.username).toBe('testuser');
    });
    it('should authenticate a user with valid credentials', async () => {
        const loginData = { email: 'test@example.com', password: 'password123' };
        const result = await (0, auth_1.authenticateUser)(loginData);
        expect(result).toHaveProperty('token');
    });
    it('should not authenticate a user with invalid credentials', async () => {
        const loginData = { email: 'test@example.com', password: 'wrongpassword' };
        await expect((0, auth_1.authenticateUser)(loginData)).rejects.toThrow('Authentication failed');
    });
});
