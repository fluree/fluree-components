import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
require("typeface-cooper-hewitt");

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "36px",
    borderRadius: "3px",
    boxSizing: "border-box",
    borderWidth: "2px",
    borderStyle: "solid",
    label: {
      fontFamily: "Cooper Hewitt",
      fontStyle: "normal",
      fontWeight: 500,
      lineHeight: "16px",
      textAlign: "center",
      letterSpacing: "0.75px",
      textTransform: "uppercase",
    },
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
    background: "#FFFFFF",
    color: "#13C6FF",
    borderColor: "#13C6FF",
    "&:hover": {
      background: "#13C6FF",
      color: "#FFFFFF",
    },
  },
  twilightOutline: {
    background: "#FFFFFF",
    color: "#091133",
    borderColor: "#091133",
    "&:hover": {
      background: "#091133",
      color: "#FFFFFF",
    },
  },
  flurpleOutline: {
    background: "#FFFFFF",
    color: "#4C56A5",
    borderColor: "#4C56A5",
    "&:hover": {
      background: "#4C56A5",
      color: "#FFFFFF",
    },
  },
  shadow: {
    boxShadow: "1px 1px 4px rgba(0, 0, 0, 0.25)",
  },
}));

const FlureeButton = (props) => {
  const classes = useStyles();

  const { color = "blue", type = "filled", dropShadow = false } = props;
  return (
    <Button
      className={clsx(
        classes.root,
        dropShadow && classes.shadow,
        (color === "blue" && type === "filled" && classes.blueFilled) ||
          (type === "outline" && classes.blueOutline),
        color === "twilight" &&
          ((type === "filled" && classes.twilightFilled) ||
            (type === "outline" && classes.twilightOutline)),
        color === "flurple" && ((type === "filled" && classes.flurpleFilled) ||
          (type === "outline" && classes.flurpleOutline))
      )}
      {...props}
      disableElevation
    >
      {props.children}
    </Button>
  );
};

export default FlureeButton;
