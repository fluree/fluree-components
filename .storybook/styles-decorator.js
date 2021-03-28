import React from "react";

import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { StylesProvider } from "@material-ui/styles";
import myTheme from "../src/theme/index"

const flureeTheme = createMuiTheme(myTheme);

const StylesDecorator = storyFn => (
  <StylesProvider injectFirst>
    <CssBaseline />
      <MuiThemeProvider theme={flureeTheme}>
        {storyFn()}
      </MuiThemeProvider>
  </StylesProvider>
)

export default StylesDecorator