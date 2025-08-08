/* TypeScript types */
export interface User {
  id: number;
  username: string;
  email: string;
  createdAt: Date;
}

export interface Snap {
  id: number;
  userId: number;
  mediaUrl: string;
  createdAt: Date;
  expiresAt: Date;
}

export interface Chat {
  id: number;
  senderId: number;
  receiverId: number;
  message: string;
  createdAt: Date;
}

export interface Story {
  id: number;
  userId: number;
  mediaUrl: string;
  createdAt: Date;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
}