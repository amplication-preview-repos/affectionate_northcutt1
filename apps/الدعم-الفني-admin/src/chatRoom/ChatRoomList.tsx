import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { ADMIN_TITLE_FIELD } from "../admin/AdminTitle";
import { VISITOR_TITLE_FIELD } from "../visitor/VisitorTitle";

export const ChatRoomList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"ChatRooms"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <ReferenceField label="Admin" source="admin.id" reference="Admin">
          <TextField source={ADMIN_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField label="Visitor" source="visitor.id" reference="Visitor">
          <TextField source={VISITOR_TITLE_FIELD} />
        </ReferenceField>
      </Datagrid>
    </List>
  );
};
