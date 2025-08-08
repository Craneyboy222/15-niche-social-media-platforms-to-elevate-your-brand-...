import { mockUserData, mockSnapData, mockChatData } from './mocks';

export const createMockUser = async () => {
  // Simulate API call to create a user
  return { ...mockUserData, id: 1 };
};

export const createMockSnap = async () => {
  // Simulate API call to create a snap
  return { ...mockSnapData, id: 1 };
};

export const createMockChat = async () => {
  // Simulate API call to create a chat message
  return { ...mockChatData, id: 1 };
};