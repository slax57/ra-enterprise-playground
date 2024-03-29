import * as React from "react";
import {
  List,
  Datagrid,
  TextField,
  NumberField,
  BooleanField,
  ArrayField,
  SingleFieldList,
  ChipField,
  DateField,
} from "react-admin";

export const PostList = () => (
  <List>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="title" />
      <NumberField source="views" />
      <NumberField source="average_note" />
      <BooleanField source="commentable" />
      <ArrayField source="pictures">
        <SingleFieldList>
          <ChipField source="name" />
        </SingleFieldList>
      </ArrayField>
      <DateField source="published_at" />
      <TextField source="tags" />
      <TextField source="category" />
      <TextField source="subcategory" />
      <ArrayField source="backlinks">
        <SingleFieldList>
          <ChipField source="date" />
        </SingleFieldList>
      </ArrayField>
    </Datagrid>
  </List>
);
