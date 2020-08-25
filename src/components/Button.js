import React from "react";
import ButtonBase from "@material-ui/core/ButtonBase";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
require("typeface-cooper-hewitt");

const useStyles = makeStyles(() => ({
  root: {
    borderRadius: "3px",
    boxSizing: "border-box",
    borderWidth: "2px",
    borderStyle: "solid",
    fontFamily: "Cooper Hewitt",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "16px",
    textAlign: "center",
    letterSpacing: "0.75px",
    textTransform: "uppercase",
  },
  blueFilled: {
    background: "#13C6FF",
    color: "#FFFFFF",
    borderColor: "#13C6FF",
    "&:hover": {
      background: "#FFFFFF",
      color: "#13C6FF",
    },
  },
  twilightFilled: {
    background: "#091133",
    color: "#FFFFFF",
    borderColor: "#091133",
    "&:hover": {
      background: "#FFFFFF",
      color: "#091133",
    },
  },
  flurpleFilled: {
    background: "#4C56A5",
    borderColor: "#4C56A5",
    color: "#FFFFFF",
    "&:hover": {
      background: "#FFFFFF",
      color: "#4C56A5",
    },
  },
  blueOutline: {
    color: "#13C6FF",
    borderColor: "#13C6FF",
    "&:hover": {
      background: "#13C6FF",
      color: "#FFFFFF",
    },
  },
  twilightOutline: {
    color: "#091133",
    borderColor: "#091133",
    "&:hover": {
      background: "#091133",
      color: "#FFFFFF",
    },
  },
  flurpleOutline: {
    color: "#4C56A5",
    borderColor: "#4C56A5",
    "&:hover": {
      background: "#4C56A5",
      color: "#FFFFFF",
    },
  },
  outline: {
    background: "rgba(0. 0. 0. 0)",
  },
  shadow: {
    boxShadow: "1px 1px 4px rgba(0, 0, 0, 0.25)",
  },
  sizeSmall: {
    fontSize: "0.75rem",
    padding: "2px 0.75%",
  },
  sizeMedium: {
    padding: "8px 1.5%",
  },
  sizeLarge: {
    fontSize: "1.25rem",
    padding: "14px 1.75%",
  },
  sizeXLarge: {
    fontSize: "1.5rem",
    padding: "20px 2%",
  },
}));

const Button = (props) => {
  const classes = useStyles();

  const {
    color = "blue",
    type = "filled",
    dropShadow = false,
    size = "md",
  } = props;
  return (
    <ButtonBase
      className={clsx(
        classes.root,
        size === "sm" && classes.sizeSmall,
        size === "md" && classes.sizeMedium,
        size === "lg" && classes.sizeLarge,
        size === "xl" && classes.sizeXLarge,
        dropShadow && classes.shadow,
        (color === "blue" && type === "filled" && classes.blueFilled) ||
          (type === "outline" && [classes.blueOutline, classes.outline]),
        color === "twilight" &&
          ((type === "filled" && classes.twilightFilled) ||
            (type === "outline" && [classes.twilightOutline, classes.outline])),
        color === "flurple" &&
          ((type === "filled" && classes.flurpleFilled) ||
            (type === "outline" && [classes.flurpleOutline, classes.outline]))
      )}
    >
      {props.children}
    </ButtonBase>
  );
};

export default Button;
