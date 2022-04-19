import { Edit, SimpleForm, NumberInput, TextInput } from "react-admin";

export const PostEdit = () => (
  <Edit>
    <SimpleForm>
      <NumberInput source="id" disabled />
      <TextInput source="key" />
    </SimpleForm>
  </Edit>
);
