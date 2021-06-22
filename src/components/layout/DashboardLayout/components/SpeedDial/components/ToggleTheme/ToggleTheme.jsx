import React, { useContext, useState } from "react";
import Switch from "@material-ui/core/Switch";
import Typography from "@material-ui/core/Typography";
import { ToggleThemeContainer } from "./toggleTheme.style";
import { ThemeContext } from "../../../../../../../contexts/ThemeContextProvider";

const ToggleTheme = () => {
  const { handleToggleTheme, theme } = useContext(ThemeContext);

  return (
    <ToggleThemeContainer>
      <Typography variant="h5" component="h1">
        Seleccione un tema
      </Typography>
      <Typography variant="body1" component="p" color="textSecondary">
        Oscuro{" "}
        <Switch
          checked={theme === "dark"}
          onChange={handleToggleTheme}
          name="theme"
          size="medium"
        />
      </Typography>
    </ToggleThemeContainer>
  );
};
export default ToggleTheme;
