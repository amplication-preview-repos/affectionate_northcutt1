import { Admin } from "../admin/Admin";
import { Message } from "../message/Message";
import { Visitor } from "../visitor/Visitor";

export type ChatRoom = {
  admin?: Admin | null;
  createdAt: Date;
  id: string;
  messages?: Array<Message>;
  updatedAt: Date;
  visitor?: Visitor | null;
};
