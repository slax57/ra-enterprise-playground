import * as React from "react";
import { Admin, Layout, Menu, Sidebar } from "@react-admin/ra-enterprise";
import {
  AppLocationContext,
  MenuItem,
  MultiLevelMenu,
  ThemeOptions,
  theme as raNavigationTheme,
} from "@react-admin/ra-navigation";
import {
  ListGuesser,
  Resource,
  Layout as RaLayout,
  Sidebar as RaSidebar,
  defaultTheme,
} from "react-admin";
import localStorageDataProvider from "ra-data-local-storage";
import { createTheme } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";
import ScheduleIcon from "@material-ui/icons/Schedule";
import BuildIcon from "@material-ui/icons/Build";
import CssBaseline from "@material-ui/core/CssBaseline";

export const customTheme: ThemeOptions = {
  ...defaultTheme,
  overrides: {
    RaSidebar: {
      drawerPaper: {
        width: 96,
      },
      fixed: {
        zIndex: 1200,
      },
    },
  },
};

const useStyles = makeStyles({
  logo: {
    height: "30%",
    width: "100%",
    margin: "0.5rem",
  },
});

const MyCustomIcon = () => {
  const classes = useStyles();
  return <img alt="" className={classes.logo} src="/logo.svg" />;
};

//const CustomSidebar = (props) => <Sidebar {...props} />;

const useSidebarStyles = makeStyles({
  drawerPaper: {
    backgroundColor: "#333645",
  },
});

const MySidebar = (props: any) => {
  const classes = useSidebarStyles();
  return (
    <Sidebar
      classes={classes}
      {...props}
    />
  );
};

const MyMenu = () => (
  <MultiLevelMenu>
    {/* <MyCustomIcon /> */}

    <MenuItem
      name="data"
      icon={<ScheduleIcon />}
      to="/data"
      label="Data"
      exact
    />

    <MenuItem name="/" to="/#" icon={<BuildIcon />} label="Something " />
  </MultiLevelMenu>
);

const MyLayout = (props: any) => {
  return (
    <AppLocationContext>
      <Layout menu={MyMenu} sidebar={MySidebar} {...props} />
    </AppLocationContext>
  );
};

const dataProvider = localStorageDataProvider({
  defaultData: {
    data: [
      { id: 1, label: "1" },
      { id: 2, label: "2" },
    ],
  },
});

export const App = () => (
  <Admin
    dataProvider={dataProvider}
    layout={MyLayout}
    //theme={raNavigationTheme}
    //theme={customTheme}
  >
    {/* <CssBaseline /> */}

    <Resource
      name="data"
      list={ListGuesser}
      icon={ScheduleIcon}
      options={{ label: "Data" }}
    />

    <Resource name="/" icon={ScheduleIcon} options={{ label: "Something" }} />
  </Admin>
);
