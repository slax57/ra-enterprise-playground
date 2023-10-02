import * as React from "react";
import {
  DateInput,
  Create,
  ReferenceInput,
  SelectInput,
  SimpleForm,
  TextInput,
} from "react-admin";

export const CommentCreate = () => (
  <Create>
    <SimpleForm>
      <DateInput source="author.undefined" />
      <ReferenceInput source="post_id" reference="posts">
        <SelectInput optionText="id" />
      </ReferenceInput>
      <TextInput source="body" />
      <DateInput source="created_at" />
    </SimpleForm>
  </Create>
);
