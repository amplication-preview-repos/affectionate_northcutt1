import { SortOrder } from "../../util/SortOrder";

export type ChatRoomOrderByInput = {
  adminId?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
  visitorId?: SortOrder;
};
