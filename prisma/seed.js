"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* Basic seed data */
const users_1 = require("./seed/users");
const snaps_1 = require("./seed/snaps");
const chats_1 = require("./seed/chats");
const stories_1 = require("./seed/stories");
async function main() {
    await (0, users_1.seedUsers)();
    await (0, snaps_1.seedSnaps)();
    await (0, chats_1.seedChats)();
    await (0, stories_1.seedStories)();
}
main().catch(e => console.error(e)).finally(() => process.exit());
