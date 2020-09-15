import React from "react";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import MicIcon from "@material-ui/icons/Mic";
import IconButton from "@material-ui/core/IconButton";
import ClearIcon from "@material-ui/icons/Clear";
import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";

export default {
  title: "Inputs/TextField/Adornments",
};

export const TextAdornment = () => (
  <TextField
    variant="filled"
    label="Email"
    InputProps={{
      endAdornment: <InputAdornment position="end">@gmail.com</InputAdornment>,
    }}
  />
);

export const IconAdornment = () => (
  <TextField
    variant="filled"
    label="Label"
    InputProps={{
      endAdornment: (
        <IconButton>
          <MicIcon />
        </IconButton>
      ),
    }}
  />
);

export const WithClearIcon = () => {
  const [form, setForm] = React.useState("");

  const handleClear = () => {
    setForm("");
  };

  const handleChange = (e) => {
    setForm(e.target.value);
  };

  return (
    <TextField
      variant="filled"
      label="Label"
      onChange={handleChange}
      value={form}
      InputProps={{
        endAdornment: (
          <IconButton onClick={handleClear}>
            <ClearIcon style={{ fontSize: "1.25rem" }} />
          </IconButton>
        ),
      }}
    />
  );
};

export const Password = () => {
  const [pass, setPass] = React.useState("");
  const [visible, setVisible] = React.useState(false);

  const changeHandler = (e) => {
    if (e.target.value === "") {

    }
    setPass(e.target.value);
  };

  const toggleVisible = () => {
    setVisible(!visible);
  };


  return (
    <TextField
      variant="filled"
      label="Enter your password"
      type={visible ? "text" : "password"}
      onChange={changeHandler}
      value={pass}
      InputProps={{
        endAdornment: (
          <IconButton onClick={toggleVisible}>
            {visible ? <VisibilityIcon /> : <VisibilityOffIcon />}
          </IconButton>
        ),
      }}
      error={pass.length < 8 && pass !== ""}
      helperText="At least 8 characters"
    />
  );
};
