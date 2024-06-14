import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { ChatRoomTitle } from "../chatRoom/ChatRoomTitle";

export const MessageCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="chatRoom.id"
          reference="ChatRoom"
          label="ChatRoom"
        >
          <SelectInput optionText={ChatRoomTitle} />
        </ReferenceInput>
        <TextInput label="content" multiline source="content" />
      </SimpleForm>
    </Create>
  );
};
