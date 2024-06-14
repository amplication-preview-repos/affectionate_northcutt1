import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { AdminTitle } from "../admin/AdminTitle";
import { MessageTitle } from "../message/MessageTitle";
import { VisitorTitle } from "../visitor/VisitorTitle";

export const ChatRoomEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="admin.id" reference="Admin" label="Admin">
          <SelectInput optionText={AdminTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="messages"
          reference="Message"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={MessageTitle} />
        </ReferenceArrayInput>
        <ReferenceInput source="visitor.id" reference="Visitor" label="Visitor">
          <SelectInput optionText={VisitorTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
