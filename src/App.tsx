import * as React from "react";
import { Admin, Resource, ListGuesser, EditGuesser } from "react-admin";
import fakeDataProvider from "ra-data-fakerest";
import { PostList } from "./PostList";
import { PostCreate } from "./PostCreate";
import { PostEdit } from "./PostEdit";

const dataProvider = fakeDataProvider({
  posts: [
    { id: 0, key: "test-000" },
    { id: 1, key: "test-001" },
  ],
});

const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource
      name="posts"
      list={PostList}
      edit={PostEdit}
      create={PostCreate}
    />
  </Admin>
);

export default App;
