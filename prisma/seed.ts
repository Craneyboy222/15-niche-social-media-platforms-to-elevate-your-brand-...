/* Basic seed data */
import { seedUsers } from './seed/users';
import { seedSnaps } from './seed/snaps';
import { seedChats } from './seed/chats';
import { seedStories } from './seed/stories';

async function main() {
  await seedUsers();
  await seedSnaps();
  await seedChats();
  await seedStories();
}

main().catch(e => console.error(e)).finally(() => process.exit());
