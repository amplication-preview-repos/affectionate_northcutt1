import { ChatRoom } from "../chatRoom/ChatRoom";

export type Visitor = {
  chatRooms?: Array<ChatRoom>;
  createdAt: Date;
  id: string;
  name: string | null;
  updatedAt: Date;
};
