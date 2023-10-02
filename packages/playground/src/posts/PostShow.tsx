import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  TextField,
  NumberField,
  BooleanField,
  ArrayField,
  RichTextField,
  Datagrid,
  DateField,
  UrlField,
} from "react-admin";

export const PostShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField source="title" />
      <TextField source="teaser" />
      <RichTextField source="body" />
      <NumberField source="views" />
      <NumberField source="average_note" />
      <BooleanField source="commentable" />
      <ArrayField source="pictures">
        <Datagrid>
          <TextField source="name" />
          <UrlField source="url" />
          <TextField source="metas.title" />
        </Datagrid>
      </ArrayField>
      <DateField source="published_at" />
      <TextField source="tags" />
      <TextField source="category" />
      <TextField source="subcategory" />
      <ArrayField source="backlinks">
        <Datagrid>
          <DateField source="date" />
          <UrlField source="url" />
        </Datagrid>
      </ArrayField>
    </SimpleShowLayout>
  </Show>
);
