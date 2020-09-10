import React, { useState } from "react";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import FilledInput from "@material-ui/core/FilledInput";
import FormHelperText from "@material-ui/core/FormHelperText";
import { makeStyles } from "@material-ui/core/styles";
import { alert } from "../../themes/colors";

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

export default function LimitedTextInput(props) {
  const{value= ""} = props;
  const [length, setLength] = useState(value.length);

  const changeHandler = (e) => setLength(e.target.value.length);

  return (
    <FormControl variant="filled" error={length > props.maxLength}>
      <InputLabel htmlFor="example-input" variant="filled">
        {props.label}
      </InputLabel>
      <FilledInput
        id="example-input"
        aria-describedby="example-helper-text"
        onChange={changeHandler}
        value={props.value || null}
        multiline={props.multiline}
        margin={props.margin}
      />
      <FormHelperText
        id="example-helper-text"
        variant="filled"
        component={CharLimitHelper}
        length={length}
        maxLength={props.maxLength}
      >
        {props.helperText}
      </FormHelperText>
    </FormControl>
  );
}
