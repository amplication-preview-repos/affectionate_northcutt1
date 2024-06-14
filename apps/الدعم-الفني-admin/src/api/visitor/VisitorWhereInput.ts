import { ChatRoomListRelationFilter } from "../chatRoom/ChatRoomListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type VisitorWhereInput = {
  chatRooms?: ChatRoomListRelationFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
};
