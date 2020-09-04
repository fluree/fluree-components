import React from "react";
import FormControl from "@material-ui/core/FormControl";
import FilledInput from "@material-ui/core/FilledInput";
import InputLabel from "@material-ui/core/InputLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import WarningIcon from "@material-ui/icons/Warning";
import { makeStyles } from "@material-ui/core/styles";
import { alert } from "../themes/colors";

const errorStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "space-between",
    color: alert,
    alignItems: "center",    
  },
  text: {
    fontFamily: "Open Sans",
    fontSize: "0.75rem",
    lineHeight: "0px"
  },
  adornment: {
    fontSize: "1rem",
  },
});

const ErrorHelper = (props) => {
  const classes = errorStyles();
  return (
    <div className={classes.root}>
      <p className={classes.text}>{props.children}</p>
      <WarningIcon className={classes.adornment} />
    </div>
  );
};

export const FlureeTextInput = (props) => {
  return (
    <FormControl {...props}>
      <InputLabel htmlFor="input-text" variant="filled">
        {props.label}
      </InputLabel>
      <FilledInput
        id="input-text"
        aria-describedby="input-helper-text"
        value={props.value}
      />
      {props.error ? (
        <FormHelperText
          id="input-helper-text"
          variant="filled"
          component={ErrorHelper}
        >
          {props.helperText}
        </FormHelperText>
      ) : props.maxLength ? (
        <FormHelperText></FormHelperText>
      ) : (
        <FormHelperText id="input-helper-text" variant="filled">
          {props.helperText}
        </FormHelperText>
      )}
    </FormControl>
  );
};
