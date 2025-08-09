"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const app_1 = __importDefault(require("../app"));
describe('API Endpoints', () => {
    it('GET /api/users should return user list', async () => {
        const res = await (0, supertest_1.default)(app_1.default).get('/api/users');
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('users');
    });
    it('POST /api/users should create a new user', async () => {
        const res = await (0, supertest_1.default)(app_1.default).post('/api/users').send({ username: 'testuser', email: 'testuser@example.com', password: 'password123' });
        expect(res.statusCode).toEqual(201);
        expect(res.body).toHaveProperty('id');
    });
});
