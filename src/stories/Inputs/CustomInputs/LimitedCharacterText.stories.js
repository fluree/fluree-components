import React, { useState } from "react";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import FilledInput from "@material-ui/core/FilledInput";
import FormHelperText from "@material-ui/core/FormHelperText";
import { makeStyles } from "@material-ui/core/styles";
import { alert } from "../../../themes/colors";

export default {
  title: "Inputs/Text/Custom/Limited Characters",
};

const useStyles = makeStyles({
  root: {
    boxSizing: "border-box",
    width: "100%",
    display: "flex",
    justifyContent: "flex-end",
    fontFamily: "Open Sans",
    fontSize: "0.75rem",
    lineHeight: "6px",
  },
  overLimit: {
    color: alert,
  },
});

const CharLimitHelper = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {props.children}
      {props.length > props.maxLength ? (
        <p className={classes.overLimit}>
          {props.length}/{props.maxLength}
        </p>
      ) : (
        <p>
          {props.length}/{props.maxLength}
        </p>
      )}
    </div>
  );
};

const Template = (args) => {
  const [value, setValue] = useState("");

  const changeHandler = (e) => setValue(e.target.value);

  return (
    <FormControl variant="filled" error={value.length > args.maxLength}>
      <InputLabel htmlFor="example-input" variant="filled">
        {args.label}
      </InputLabel>
      <FilledInput
        id="example-input"
        aria-describedby="example-helper-text"
        onChange={changeHandler}
        value={value}
        multiline={args.multiline}
      />
      <FormHelperText
        id="example-helper-text"
        variant="filled"
        component={CharLimitHelper}
        length={value.length}
        maxLength={args.maxLength}
      >
        {args.helperText}
      </FormHelperText>
    </FormControl>
  );
};

export const SingleLine = Template.bind({});
SingleLine.args = {
  label: "Limited Characters",
  maxLength: 10,
};

export const MultiLineLimitedTextInput = Template.bind({});
MultiLineLimitedTextInput.args = {
  maxLength: 50,
  label: "Multi-line",
  multiline: true,
};
