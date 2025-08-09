"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("../services/user");
describe('User Service', () => {
    it('should retrieve a user by ID', async () => {
        const userId = 1;
        const user = await (0, user_1.getUserById)(userId);
        expect(user).toHaveProperty('id', userId);
    });
    it('should create a new user', async () => {
        const userData = { username: 'newuser', email: 'newuser@example.com', password: 'password123' };
        const user = await (0, user_1.createUser)(userData);
        expect(user).toHaveProperty('id');
        expect(user.username).toBe('newuser');
    });
});
