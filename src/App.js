import React from "react";
import AppRouter from "./components/router/AppRouter/AppRouter";

import { ThemeProvider } from "styled-components";
import {
  /*
         nos lanzaba una excepción que será corregia en una version
         posterior de material iu por ahora se soluciona de está forma,
         pero es experimental
    */
  unstable_createMuiStrictModeTheme as createMuiTheme,
  MuiThemeProvider,
  StylesProvider,
} from "@material-ui/core/styles";

import colors from "./const/colors";
import { CssBaseline } from "@material-ui/core";
// import { purple } from "@material-ui/core/colors";

// import { unstable_createMuiStrictModeTheme as createMuiTheme } from '@material-ui/core';

// import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    type: "dark",
    bgPrimary: colors.bgPrimary,
    bgSecondary: colors.bgSecondary,
    bgThrid: colors.bgThrid,
    // accent: {
    //   backgroundColor: purple[500],
    //   color: "#ffff",
    // },
  },
});

function App() {
  //   const color = { color: colors.light };

  return (
    <StylesProvider injectFirst>
      {/* Use the theme in the ThemeProvider for Material-UI so //styles are
        applied to the Material-UI components */}
      <MuiThemeProvider theme={theme}>
        {/* Use also the ThemeProvider for Styled-Components so //you can access
          the theme in your own css */}
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <AppRouter />
        </ThemeProvider>
      </MuiThemeProvider>
    </StylesProvider>
  );
}

export default App;
