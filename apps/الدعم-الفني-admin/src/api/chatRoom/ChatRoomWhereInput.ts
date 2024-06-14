import { AdminWhereUniqueInput } from "../admin/AdminWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { MessageListRelationFilter } from "../message/MessageListRelationFilter";
import { VisitorWhereUniqueInput } from "../visitor/VisitorWhereUniqueInput";

export type ChatRoomWhereInput = {
  admin?: AdminWhereUniqueInput;
  id?: StringFilter;
  messages?: MessageListRelationFilter;
  visitor?: VisitorWhereUniqueInput;
};
