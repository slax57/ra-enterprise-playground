import {
  List,
  Datagrid,
  TextField,
  NumberField,
  TopToolbar,
  CreateButton,
} from "react-admin";

export const PostList = () => (
  <List
    actions={
      <TopToolbar>
        <CreateButton />
      </TopToolbar>
    }
  >
    <Datagrid rowClick="edit">
      <NumberField source="id" />
      <TextField source="key" />
    </Datagrid>
  </List>
);
