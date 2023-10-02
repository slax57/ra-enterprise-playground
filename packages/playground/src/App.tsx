import * as React from "react";
import { Resource } from "react-admin";
//import { Admin } from "react-admin";
import { Admin } from "@react-admin/ra-enterprise";
import jsonServerProvider from "ra-data-json-server";
import posts from "./posts";
import comments from "./comments";

const dataProvider = jsonServerProvider("http://localhost:3000");

const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="posts" {...posts} />
    <Resource name="comments" {...comments} />
    <Resource name="tags" />
    <Resource name="users" />
  </Admin>
);

export default App;
