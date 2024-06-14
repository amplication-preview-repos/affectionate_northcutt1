import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { AdminTitle } from "../admin/AdminTitle";
import { MessageTitle } from "../message/MessageTitle";
import { VisitorTitle } from "../visitor/VisitorTitle";

export const ChatRoomCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};
