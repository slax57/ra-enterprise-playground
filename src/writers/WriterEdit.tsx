import { SimpleForm, TextInput, Edit } from "react-admin";
import { WriterForm } from "./WriterForm";

export const WriterEdit = (props: any) => {
  return (
    <Edit {...props}>
      <SimpleForm warnWhenUnsavedChanges>
        <h1>Edit</h1>
        <TextInput source="id" disabled />
        <WriterForm />
      </SimpleForm>
    </Edit>
  );
};
