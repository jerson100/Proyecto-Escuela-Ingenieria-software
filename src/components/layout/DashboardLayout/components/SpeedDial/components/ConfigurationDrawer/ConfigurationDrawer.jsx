import React, { memo } from "react";
import { DrawerContainer } from "./configurationDrawer.style";
import ToggleTheme from "../ToggleTheme/ToggleTheme";
import { SwipeableDrawer } from "@material-ui/core";

const ConfigurationDrawer = ({ open, setOpen }) => {
  return (
    <SwipeableDrawer
      anchor={"right"}
      open={open}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
    >
      <DrawerContainer>
        <ToggleTheme />
      </DrawerContainer>
    </SwipeableDrawer>
  );
};

export default memo(ConfigurationDrawer);
