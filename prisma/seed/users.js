"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.seedUsers = seedUsers;
/* User seed data */
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
async function seedUsers() {
    await prisma.user.createMany({
        data: [
            { username: 'john_doe', email: 'john@example.com', password_hash: 'hashed_password_1' },
            { username: 'jane_doe', email: 'jane@example.com', password_hash: 'hashed_password_2' }
        ]
    });
}
