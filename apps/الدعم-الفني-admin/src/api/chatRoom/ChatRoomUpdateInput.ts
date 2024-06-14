import { AdminWhereUniqueInput } from "../admin/AdminWhereUniqueInput";
import { MessageUpdateManyWithoutChatRoomsInput } from "./MessageUpdateManyWithoutChatRoomsInput";
import { VisitorWhereUniqueInput } from "../visitor/VisitorWhereUniqueInput";

export type ChatRoomUpdateInput = {
  admin?: AdminWhereUniqueInput | null;
  messages?: MessageUpdateManyWithoutChatRoomsInput;
  visitor?: VisitorWhereUniqueInput | null;
};
