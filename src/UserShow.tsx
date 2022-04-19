import {
  Breadcrumb,
  BreadcrumbItem,
  ResourceBreadcrumbItems,
} from "@react-admin/ra-navigation";
import { Show, SimpleShowLayout, TextField, EmailField } from "react-admin";

export const UserShow = (props: any) => (
  <>
    <Breadcrumb>
      {/* <ResourceBreadcrumbItems /> */}
      {/* <ResourceBreadcrumbItems resources={["users"]} /> */}
      <BreadcrumbItem name="users" label="Users" to="/users">
        <BreadcrumbItem
          name="show"
          label={({ record }: { record?: any }) => `Record #${record?.name}`}
        />
      </BreadcrumbItem>
    </Breadcrumb>
    <Show {...props}>
      <SimpleShowLayout>
        <TextField source="id" />
        <TextField source="name" />
        <TextField source="username" />
        <EmailField source="email" />
        <TextField source="address.street" />
        <TextField source="phone" />
        <TextField source="website" />
        <TextField source="company.name" />
      </SimpleShowLayout>
    </Show>
  </>
);
