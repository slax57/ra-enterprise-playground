import * as React from "react";
import { Admin, Resource } from "react-admin";
import fakeRestProvider from "ra-data-fakerest";
import posts from "./posts";
import { data } from "./data";

const dataProvider = fakeRestProvider(data, true);

const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="posts" {...posts} />
    <Resource name="comments" />
    <Resource name="tags" />
    <Resource name="users" />
  </Admin>
);

export default App;
