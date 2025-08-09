"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.seedStories = seedStories;
/* Story seed data */
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
async function seedStories() {
    await prisma.story.createMany({
        data: [
            { user_id: 1, media_url: 'http://example.com/story1.jpg' },
            { user_id: 2, media_url: 'http://example.com/story2.jpg' }
        ]
    });
}
