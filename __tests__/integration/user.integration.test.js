"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const app_1 = __importDefault(require("../../app"));
describe('User Integration Tests', () => {
    it('should create and retrieve a user', async () => {
        const userData = { username: 'integrationUser', email: 'integrationUser@example.com', password: 'password123' };
        const createRes = await (0, supertest_1.default)(app_1.default).post('/api/users').send(userData);
        expect(createRes.statusCode).toEqual(201);
        const userId = createRes.body.id;
        const retrieveRes = await (0, supertest_1.default)(app_1.default).get(`/api/users/${userId}`);
        expect(retrieveRes.statusCode).toEqual(200);
        expect(retrieveRes.body.username).toBe('integrationUser');
    });
});
