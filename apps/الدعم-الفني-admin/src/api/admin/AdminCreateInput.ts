import { ChatRoomCreateNestedManyWithoutAdminsInput } from "./ChatRoomCreateNestedManyWithoutAdminsInput";

export type AdminCreateInput = {
  chatRooms?: ChatRoomCreateNestedManyWithoutAdminsInput;
  email?: string | null;
  password?: string | null;
};
