import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Backdrop from "@material-ui/core/Backdrop";
import SpeedDial from "@material-ui/lab/SpeedDial";
import SpeedDialIcon from "@material-ui/lab/SpeedDialIcon";
import SpeedDialAction from "@material-ui/lab/SpeedDialAction";
import SettingsIcon from "@material-ui/icons/Settings";
import ConfigurationDrawer from "./components/ConfigurationDrawer/ConfigurationDrawer";

const useStyles = makeStyles((theme) => ({
  root: {
    height: 380,
    transform: "translateZ(0px)",
    flexGrow: 1,
  },
  speedDial: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
    zIndex: 100000,
  },
  backdrop: {
    zIndex: 10000,
    backgroundColor: "#000000cc",
  },
}));

const actions = [{ icon: <SettingsIcon />, name: "Configuración" }];

const SpeedDialDashboard = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [nameAction, setNameAction] = useState("");

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickDialAction = (nameAction) => {
    handleClose();
    setNameAction(nameAction);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <>
      <SpeedDial
        ariaLabel="SpeedDial tooltip example"
        className={classes.speedDial}
        //   hidden={hidden}
        icon={<SpeedDialIcon />}
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            tooltipOpen
            onClick={() => handleClickDialAction(action.name)}
          />
        ))}
      </SpeedDial>
      <Backdrop open={open} className={classes.backdrop} />
      <ConfigurationDrawer
        open={nameAction === "Configuración"}
        setOpen={setNameAction}
      />
    </>
  );
};

export default SpeedDialDashboard;
