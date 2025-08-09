"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createMockChat = exports.createMockSnap = exports.createMockUser = void 0;
const mocks_1 = require("./mocks");
const createMockUser = async () => {
    // Simulate API call to create a user
    return { ...mocks_1.mockUserData, id: 1 };
};
exports.createMockUser = createMockUser;
const createMockSnap = async () => {
    // Simulate API call to create a snap
    return { ...mocks_1.mockSnapData, id: 1 };
};
exports.createMockSnap = createMockSnap;
const createMockChat = async () => {
    // Simulate API call to create a chat message
    return { ...mocks_1.mockChatData, id: 1 };
};
exports.createMockChat = createMockChat;
