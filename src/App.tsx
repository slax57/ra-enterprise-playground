import * as React from "react";
import { Admin } from "@react-admin/ra-enterprise";
import { AppLocationContext } from "@react-admin/ra-navigation";
import { Resource, ListGuesser, ShowGuesser } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import { UserShow } from "./UserShow";
import { UserList } from "./UserList";

const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");

const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="users" list={UserList} show={UserShow} />
    <Resource name="todos" list={ListGuesser} />
  </Admin>
);

export default App;
