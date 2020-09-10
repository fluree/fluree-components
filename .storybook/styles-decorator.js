import React from "react";

import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { StylesProvider } from "@material-ui/styles";

import FlureeLight from "../src/themes";

const StylesDecorator = storyFn => (
  <StylesProvider injectFirst>
    <CssBaseline />
      <MuiThemeProvider theme={FlureeLight}>
        {storyFn()}
      </MuiThemeProvider>
  </StylesProvider>
)

export default StylesDecorator