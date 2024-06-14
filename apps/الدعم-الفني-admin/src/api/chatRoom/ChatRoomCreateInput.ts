import { AdminWhereUniqueInput } from "../admin/AdminWhereUniqueInput";
import { MessageCreateNestedManyWithoutChatRoomsInput } from "./MessageCreateNestedManyWithoutChatRoomsInput";
import { VisitorWhereUniqueInput } from "../visitor/VisitorWhereUniqueInput";

export type ChatRoomCreateInput = {
  admin?: AdminWhereUniqueInput | null;
  messages?: MessageCreateNestedManyWithoutChatRoomsInput;
  visitor?: VisitorWhereUniqueInput | null;
};
