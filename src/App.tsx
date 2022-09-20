import * as React from "react";
import { Resource } from "react-admin";
import { addEventsForMutations } from "@react-admin/ra-audit-log";
import { Admin } from "@react-admin/ra-enterprise";
import fakeRestProvider from "ra-data-fakerest";
import posts from "./posts";
import comments from "./comments";
import { data } from "./data";
import authProvider from "./authProvider";

const dataProvider = addEventsForMutations(
  fakeRestProvider(data, true),
  authProvider
);

const App = () => (
  <Admin dataProvider={dataProvider} authProvider={authProvider}>
    <Resource name="posts" {...posts} />
    <Resource name="comments" {...comments} />
    <Resource name="tags" />
    <Resource name="users" />
  </Admin>
);

export default App;
