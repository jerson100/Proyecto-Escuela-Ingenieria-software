import React from "react";
import AppRouter from "./components/router/AppRouter/AppRouter";

import { ThemeProvider } from "styled-components";
import {
  createMuiTheme,
  MuiThemeProvider,
  StylesProvider,
} from "@material-ui/core/styles";

import colors from "./const/colors";

// import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    type: "dark",
    bgPrimary: colors.bgPrimary,
    bgSecondary: colors.bgSecondary,
    bgThrid: colors.bgThrid,
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
          <AppRouter />
        </ThemeProvider>
      </MuiThemeProvider>
    </StylesProvider>
  );
}

export default App;
