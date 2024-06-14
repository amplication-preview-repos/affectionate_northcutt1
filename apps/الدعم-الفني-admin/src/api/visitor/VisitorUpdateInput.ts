import { ChatRoomUpdateManyWithoutVisitorsInput } from "./ChatRoomUpdateManyWithoutVisitorsInput";

export type VisitorUpdateInput = {
  chatRooms?: ChatRoomUpdateManyWithoutVisitorsInput;
  name?: string | null;
};
