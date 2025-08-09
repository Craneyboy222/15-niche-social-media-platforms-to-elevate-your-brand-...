"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.seedSnaps = seedSnaps;
/* Snap seed data */
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
async function seedSnaps() {
    await prisma.snap.createMany({
        data: [
            { user_id: 1, media_url: 'http://example.com/snap1.jpg', expires_at: new Date(new Date().setDate(new Date().getDate() + 1)) },
            { user_id: 2, media_url: 'http://example.com/snap2.jpg', expires_at: new Date(new Date().setDate(new Date().getDate() + 1)) }
        ]
    });
}
