// Define TypeScript types for database entities
export interface User {
  id: number;
  username: string;
  email: string;
  password_hash: string;
  created_at: Date;
}

export interface Snap {
  id: number;
  user_id: number;
  media_url: string;
  created_at: Date;
  expires_at: Date;
}

export interface Chat {
  id: number;
  sender_id: number;
  receiver_id: number;
  message: string;
  created_at: Date;
}

export interface Story {
  id: number;
  user_id: number;
  media_url: string;
  created_at: Date;
}