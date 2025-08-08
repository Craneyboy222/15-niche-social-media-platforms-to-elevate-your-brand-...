export interface User {
  id: number;
  username: string;
  password_hash: string;
  email: string;
  created_at: Date;
}

export interface Snap {
  id: number;
  user_id: number;
  media_url: string;
  created_at: Date;
  expires_at: Date | null;
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