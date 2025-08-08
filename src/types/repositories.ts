import { User, Snap, Chat, Story } from './models';

export interface UserRepository {
  createUser(user: User): Promise<User>;
  findUserById(id: number): Promise<User | null>;
  findUserByEmail(email: string): Promise<User | null>;
}

export interface SnapRepository {
  createSnap(snap: Snap): Promise<Snap>;
  findSnapById(id: number): Promise<Snap | null>;
}

export interface ChatRepository {
  createChat(chat: Chat): Promise<Chat>;
  getChatsForUser(userId: number): Promise<Chat[]>;
}

export interface StoryRepository {
  createStory(story: Story): Promise<Story>;
  getStoriesForUser(userId: number): Promise<Story[]>;
}