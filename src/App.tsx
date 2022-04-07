import { Admin, Layout, ListGuesser, Resource } from "react-admin";
import {
  AppLocationContext,
  Menu,
  MenuItem,
  MenuItemCategory,
  MultiLevelMenu,
  theme,
} from "@react-admin/ra-navigation";
import { makeStyles } from "@material-ui/core/styles";
import jsonServerProvider from "ra-data-json-server";

import DashboardIcon from "@material-ui/icons/Dashboard";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import PeopleIcon from "@material-ui/icons/People";
import SettingsIcon from "@material-ui/icons/Settings";
import { CardContent, Typography } from "@material-ui/core";

const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");

const MyDashboard = () => <h1>My Dashboard</h1>;

const useStyles = makeStyles({
  // Custom styles for the configuration item so that it appears at the very bottom of the sidebar
  configuration: {
    marginTop: "auto",
  },
});

const MyMenu = () => {
  const classes = useStyles();

  return (
    <MultiLevelMenu variant="categories">
      <MenuItemCategory
        name="dashboard"
        to="/"
        exact
        label="Dashboard"
        icon={<DashboardIcon />}
      />
      <MenuItemCategory
        name="songs"
        icon={<LibraryMusicIcon />}
        to="/songs"
        label="Songs"
      />
      {/* The empty filter is required to avoid falling back to the previously set filter */}
      <MenuItemCategory
        name="artists"
        to={"/artists?filter={}"}
        label="Artists"
        icon={<PeopleIcon />}
      >
        {/* CardContent to get consistent spacings */}
        <CardContent>
          <Typography variant="h3" gutterBottom>
            Custom title
          </Typography>
          {/* Note that we must wrap our MenuItem components in a Menu */}
          <Menu>
            <MenuItem
              name="artists.rock"
              to={'/artists?filter={"type":"Rock"}'}
              label="Rock"
            >
              <MenuItem
                name="artists.rock.pop"
                to={'/artists?filter={"type":"Pop Rock"}'}
                label="Pop Rock"
              />
              <MenuItem
                name="artists.rock.folk"
                to={'/artists?filter={"type":"Folk Rock"}'}
                label="Folk Rock"
              />
            </MenuItem>
            <MenuItem
              name="artists.jazz"
              to={'/artists?filter={"type":"Jazz"}'}
              label="Jazz"
            >
              <MenuItem
                name="artists.jazz.rb"
                to={'/artists?filter={"type":"RB"}'}
                label="R&B"
              />
            </MenuItem>
          </Menu>
        </CardContent>
      </MenuItemCategory>
      <MenuItemCategory
        className={classes.configuration}
        name="configuration"
        to="/"
        exact
        label="Configuration"
        icon={<SettingsIcon />}
      />
    </MultiLevelMenu>
  );
};

const MyLayout = (props: any) => {
  return (
    <AppLocationContext>
      <Layout {...props} menu={MyMenu} />
    </AppLocationContext>
  );
};

export const App = () => (
  <Admin
    dataProvider={dataProvider}
    layout={MyLayout}
    dashboard={MyDashboard}
    /* Apply the theme provided by ra-navigation */
    theme={theme}
  >
    <Resource name="users" list={ListGuesser} />
    <Resource name="todos" list={ListGuesser} />
    <Resource name="artists" list={ListGuesser} />
    <Resource name="songs" list={ListGuesser} />
  </Admin>
);
