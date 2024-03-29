import * as React from "react";
import {
  Create,
  SimpleForm,
  NumberInput,
  TextInput,
  BooleanInput,
  ArrayInput,
  SimpleFormIterator,
  DateInput,
} from "react-admin";

export const PostCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="title" />
      <TextInput source="teaser" />
      <TextInput source="body" />
      <NumberInput source="views" />
      <NumberInput source="average_note" />
      <BooleanInput source="commentable" />
      <ArrayInput source="pictures">
        <SimpleFormIterator>
          <TextInput source="name" />
          <TextInput source="url" />
          <TextInput source="metas.title" />
        </SimpleFormIterator>
      </ArrayInput>
      <DateInput source="published_at" />
      <TextInput source="tags" />
      <TextInput source="category" />
      <TextInput source="subcategory" />
      <ArrayInput source="backlinks">
        <SimpleFormIterator>
          <DateInput source="date" />
          <TextInput source="url" />
        </SimpleFormIterator>
      </ArrayInput>
    </SimpleForm>
  </Create>
);
