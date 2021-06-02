import { makeStyles } from "@material-ui/core";
import React from "react";
import clsx from "clsx";
import NavigationMenu from "../NavigationMenu/NavigationMenu";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    overflow: "hidden",
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
    width: "100%",
    flexShrink: 0,
  },
}));

const DashboardLayout = ({ children }) => {
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();
  return (
    <>
      <div className={classes.root}>
        <NavigationMenu setOpen={setOpen} open={open} />
        <main
          className={clsx(classes.content, {
            [classes.contentShift]: open,
          })}
        >
          <div className={classes.drawerHeader} />
          {children}
        </main>
      </div>
    </>
  );
};

export default DashboardLayout;
