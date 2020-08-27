import React from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import {
  flureeBlue,
  flurple,
  twilight,
  ember,
  teal,
  violet,
  darkGrey,
  lightGrey,
  blizzard,
  white
} from "./colors";
import buttonGroup from "./overrides/buttonGroup";
import button from "./overrides/button";
require("typeface-cooper-hewitt");

const flureeBasic = createMuiTheme({
  palette: {
    primary: {
      main: flureeBlue,
      contrastText: white,
    },
    secondary: {
      main: flurple,
    },
    info: {
      main: twilight,
    },
    error: {
      main: ember,
    },
    success: {
      main: teal,
    },
    warning: {
      main: violet,
    },
    text: {
      primary: flurple,
      secondary: twilight,
      disabled: darkGrey,
      hint: lightGrey,
    },
    divider: blizzard,
  },
  shape: {
    borderRadius: "2px",
  },
  typography: {
    fontFamily: "'Cooper Hewitt', 'Open Sans', 'Roboto Condensed'",
    button: {
      fontSize: "1rem",
      lineHeight: "16px",
      letterSpacing: "0.75px",
    },
  },
  overrides: {
    MuiButtonGroup: { ...buttonGroup },
    MuiButton: { ...button },
  },
});

export const FlureeBasic = (props) => {
  return <ThemeProvider theme={flureeBasic}>{props.children}</ThemeProvider>;
};
