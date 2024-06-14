import { ChatRoomCreateNestedManyWithoutVisitorsInput } from "./ChatRoomCreateNestedManyWithoutVisitorsInput";

export type VisitorCreateInput = {
  chatRooms?: ChatRoomCreateNestedManyWithoutVisitorsInput;
  name?: string | null;
};
