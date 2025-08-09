"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const app_1 = __importDefault(require("../src/app"));
const chai_1 = require("chai");
describe('Database Integration Tests', () => {
    it('should create and retrieve a user via API', async () => {
        const userResponse = await (0, supertest_1.default)(app_1.default)
            .post('/api/users')
            .send({ username: 'apiUser', password: 'password', email: 'api@example.com' });
        (0, chai_1.expect)(userResponse.status).to.equal(201);
        const listResponse = await (0, supertest_1.default)(app_1.default).get('/api/users');
        (0, chai_1.expect)(listResponse.status).to.equal(200);
        (0, chai_1.expect)(listResponse.body).to.have.lengthOf.at.least(1);
    });
    it('should handle login correctly', async () => {
        const loginResponse = await (0, supertest_1.default)(app_1.default)
            .post('/api/auth/login')
            .send({ username: 'apiUser', password: 'password' });
        (0, chai_1.expect)(loginResponse.status).to.equal(200);
        (0, chai_1.expect)(loginResponse.body.token).to.exist;
    });
});
