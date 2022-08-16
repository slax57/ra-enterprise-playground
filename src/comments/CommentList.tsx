import {
  Datagrid,
  DateField,
  List,
  ReferenceField,
  TextField,
} from "react-admin";

export const CommentList = () => (
  <List>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <DateField source="author.undefined" />
      <ReferenceField source="post_id" reference="posts">
        <TextField source="id" />
      </ReferenceField>
      <TextField source="body" />
      <DateField source="created_at" />
    </Datagrid>
  </List>
);
