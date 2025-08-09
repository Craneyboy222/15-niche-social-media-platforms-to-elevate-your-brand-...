"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.seedChats = seedChats;
/* Chat seed data */
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
async function seedChats() {
    await prisma.chat.createMany({
        data: [
            { sender_id: 1, receiver_id: 2, message: 'Hello, Jane!' },
            { sender_id: 2, receiver_id: 1, message: 'Hi, John!' }
        ]
    });
}
