"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const app_1 = __importDefault(require("../../app"));
describe('Authentication Integration Tests', () => {
    it('should register and authenticate a new user', async () => {
        const userData = { username: 'integrationTestUser', email: 'integration@example.com', password: 'password123' };
        const registerRes = await (0, supertest_1.default)(app_1.default).post('/api/users').send(userData);
        expect(registerRes.statusCode).toEqual(201);
        const loginRes = await (0, supertest_1.default)(app_1.default).post('/api/auth/login').send({ email: 'integration@example.com', password: 'password123' });
        expect(loginRes.statusCode).toEqual(200);
        expect(loginRes.body).toHaveProperty('token');
    });
});
