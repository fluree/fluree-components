import React from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import {
  flureeBlue,
  flurple,
  twilight,
  alert,
  warning,
  positive,
  darkGrey,
  lightGrey,
  blizzard,
  white,
  defaultBackground,
} from "./colors";
import buttonGroup from "./overrides/buttonGroup";
import button from "../stories/Inputs/button";
import filledInput from "./overrides/filledInput";
require("typeface-cooper-hewitt");

const flureeBasic = {
  palette: {
    background: {
      default: defaultBackground,
    },
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
      main: alert,
    },
    success: {
      main: positive,
    },
    warning: {
      main: warning,
    },
    text: {
      primary: twilight,
      secondary: twilight,
      disabled: darkGrey,
      hint: lightGrey,
    },
    divider: blizzard,
    action: { disabled: lightGrey },
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
    MuiInputBase: {
      input: {
        fontFamily: "Open Sans",
        fontSize: "0.875rem",
        lineHeight: "24px",
      },
    },
    MuiInputLabel: {
      root: {
        fontFamily: "Open Sans",
        fontSize: "0.875rem",
      },
      focused: {
        lineHeight: "12px",
      },
    },
    MuiFormHelperText: {
      root: {
        fontFamily: "Open Sans",
        lineHeight: "12px",
        color: darkGrey,
        "&$error": {
          
        },
      },
    },
    MuiFilledInput: filledInput,
  },
};

const theme = createMuiTheme(flureeBasic);

export const FlureeBasic = (props) => {
  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
};
