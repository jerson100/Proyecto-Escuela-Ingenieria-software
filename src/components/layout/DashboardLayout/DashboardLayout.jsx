import { makeStyles } from "@material-ui/core";
import React from "react";
import NavigationMenu from "./components/NavigationMenu/NavigationMenu";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing(0, 0, 0, 0),
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  },
  wrapper: {
    flex: "1 0 0",
  },
}));

const DashboardLayout = ({ children }) => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.root}>
        <NavigationMenu />
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <div className={classes.wrapper}>{children}</div>
        </main>
      </div>
    </>
  );
};

export default DashboardLayout;
