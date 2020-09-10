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
  fieldBackground,
} from "./colors";
import buttonGroup from "./overrides/buttonGroup";
import button from "../stories/Inputs/button";
import filledInput from "./overrides/filledInput";
require("typeface-cooper-hewitt");

const flureeBasic = {
  palette: {
    background: {
      default: defaultBackground,
      paper: fieldBackground,
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
    h6: {
      fontWeight: "bold",
      letterSpacing: "0.0015em",
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
      focused: {
        backgroundColor: "#F3F3F3",
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
        "&$error": {},
      },
    },
    MuiFilledInput: filledInput,
    MuiRadio: {
      disabled: {
        color: "#C1C1C1",
      },
      primaryColor: {
        "&$disabled": {
          color: "#C1C1C1",
        },
      },
      secondaryColor: {
        "&$disabled": {
          color: "#C1C1C1",
        },
      },
    },
    MuiDialogTitle: {
      root: {
        fontSize: "1.25rem",
        fontStyle: "normal",
        fontWeight: "bold",
        letterSpacing: "0.0015em",
      },
    },
    MuiDialogContentText: {
      root: {
        fontFamily: "Open Sans",
        lineHeight: "28px",
        fontSize: "0.875rem",
        color: darkGrey,
      },
    },
    MuiCard: {
      root: {
        backgroundColor: "#FFFFFF",
        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.25)",
      },
    },
    MuiCardHeader: {
      root: {
        backgroundColor: flureeBlue,
        alignItems: "flex-end",
      },
      title: {
        color: white,
        fontSize: "1.5rem",
        fontWeight: "bold",
        fontStyle: "normal",
        bottom: "20px",
        alignItem: "flex-end",
      },
      content: {
        justifyContent: "flex-end",
      },
    },
    MuiCardActions: {
      root: {
        justifyContent: "flex-end",
      },
    },
  },
};

const theme = createMuiTheme(flureeBasic);

export const FlureeBasic = (props) => {
  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
};

export default theme