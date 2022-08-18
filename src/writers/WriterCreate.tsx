import { Create, SimpleForm, TextInput } from "react-admin";
import { WriterForm } from "./WriterForm";

export const WriterCreate = (props: any) => (
  <Create {...props}>
    <SimpleForm warnWhenUnsavedChanges>
      <h1>Create</h1>
      <TextInput source="id" />
      <WriterForm />
    </SimpleForm>
  </Create>
);
