import * as React from "react";
import { Admin } from "@react-admin/ra-enterprise";
import { Resource, ListGuesser, ShowGuesser } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import { UserShow } from "./UserShow";

const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");

const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="users" list={ListGuesser} show={UserShow} />
    <Resource name="todos" list={ListGuesser} />
  </Admin>
);

export default App;
