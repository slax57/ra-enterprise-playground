import * as React from "react";
import { Resource } from "react-admin";
//import { Admin } from "react-admin";
import { Admin } from "@react-admin/ra-enterprise";
import fakeRestProvider from "ra-data-fakerest";
import posts from "./posts";
import comments from "./comments";
import { data } from "./data";
import authProvider from "./authProvider";

const dataProvider = fakeRestProvider(data, true);

const App = () => (
  <Admin dataProvider={dataProvider} authProvider={authProvider}>
    <Resource name="posts" {...posts} />
    <Resource name="comments" {...comments} />
    <Resource name="tags" />
    <Resource name="users" />
  </Admin>
);

export default App;
