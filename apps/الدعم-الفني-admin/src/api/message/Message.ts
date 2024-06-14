import { ChatRoom } from "../chatRoom/ChatRoom";

export type Message = {
  chatRoom?: ChatRoom | null;
  content: string | null;
  createdAt: Date;
  id: string;
  updatedAt: Date;
};
