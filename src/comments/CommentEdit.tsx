import {
  DateInput,
  Edit,
  ReferenceInput,
  SelectInput,
  SimpleForm,
  TextInput,
} from "react-admin";

export const CommentEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="id" />
      <DateInput source="author.undefined" />
      <ReferenceInput source="post_id" reference="posts">
        <SelectInput optionText="id" />
      </ReferenceInput>
      <TextInput source="body" />
      <DateInput source="created_at" />
    </SimpleForm>
  </Edit>
);
