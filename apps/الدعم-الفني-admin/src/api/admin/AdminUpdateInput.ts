import { ChatRoomUpdateManyWithoutAdminsInput } from "./ChatRoomUpdateManyWithoutAdminsInput";

export type AdminUpdateInput = {
  chatRooms?: ChatRoomUpdateManyWithoutAdminsInput;
  email?: string | null;
  password?: string | null;
};
