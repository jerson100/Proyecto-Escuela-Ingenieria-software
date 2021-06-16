import React from "react";

import { useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Divider from "@material-ui/core/Divider";
import {
  Hidden,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";

import { Link as LinkRouter, useRouteMatch } from "react-router-dom";
import { Link as MaterialIULink } from "@material-ui/core";
import { DASHBOARD_ROUTES } from "../../../../../../../const/routes";

const JeNav = ({ classes, mobileOpen, handleDrawerToggle, window }) => {
  const theme = useTheme();
  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <NavList />
    </div>
  );
  const container =
    window !== undefined ? () => window().document.body : undefined;
  return (
    <nav className={classes.drawer} aria-label="mailbox folders">
      {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
      <Hidden smUp implementation="css">
        <Drawer
          container={container}
          variant="temporary"
          anchor={theme.direction === "rtl" ? "right" : "left"}
          open={mobileOpen}
          onClose={handleDrawerToggle}
          classes={{
            paper: classes.drawerPaper,
          }}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
        >
          {drawer}
        </Drawer>
      </Hidden>
      <Hidden xsDown implementation="css">
        <Drawer
          classes={{
            paper: classes.drawerPaper,
          }}
          variant="permanent"
          open
        >
          {drawer}
        </Drawer>
      </Hidden>
    </nav>
  );
};

const NavList = React.memo(() => {
  const { routes } = DASHBOARD_ROUTES;
  const match = useRouteMatch();
  return (
    <>
      <List>
        {routes.map(
          (r) =>
            r.isVisible && (
              <ListItem button key={r.title}>
                {r.Icon && <ListItemIcon>{<r.Icon />}</ListItemIcon>}
                <ListItemText>
                  <MaterialIULink
                    component={LinkRouter}
                    to={`${match.path}${r.path}`}
                    color="textPrimary"
                    underline={"none"}
                  >
                    {r.title}
                  </MaterialIULink>
                </ListItemText>
              </ListItem>
            )
        )}
      </List>
      <Divider />
    </>
  );
});

export default React.memo(JeNav);
