import { ChatRoom } from "../chatRoom/ChatRoom";

export type Admin = {
  chatRooms?: Array<ChatRoom>;
  createdAt: Date;
  email: string | null;
  id: string;
  password: string | null;
  updatedAt: Date;
};
