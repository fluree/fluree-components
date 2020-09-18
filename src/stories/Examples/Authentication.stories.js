import React, { useState } from "react";
import Box from "@material-ui/core/Box";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import Container from "@material-ui/core/Container";
import Dialog from "@material-ui/core/Dialog";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import { makeStyles } from "@material-ui/core/styles";
import {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@material-ui/core";

export default {
  title: "Examples/Registration Form",
};

export const AuthForm = () => {
  const useStyles = makeStyles((theme) => ({
    // root: { maxWidth: "600px" },
    wrapper: { padding: theme.spacing(2) },
    textInputs: { display: "flex", flexDirection: "column" },
    inputFields: { margin: theme.spacing(1) },
    accountCircle: {},
    formButtons: {
      display: "flex",
      justifyContent: "space-around",
      margin: theme.spacing(1)
    },
  }));

  const blankForm = () => ({
    username: "",
    password: "",
    confirmPassword: "",
    userRole: "",
  });

  const [isValid, setValid] = useState(true);

  const [visible, setVisible] = useState(false);

  const [open, setOpen] = useState(false);

  const [form, setForm] = useState(blankForm());

  const mobileBreak = useMediaQuery("(min-width: 600px)");

  const classes = useStyles();

  const formChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
    if (e.target.name === "confirmPassword") {
      setValid(form.password === e.target.value);
    }
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const clearForm = () => {
    setForm(blankForm());
    setValid(true);
  };

  const toggleVisibility = () => {
    setVisible(!visible);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  const ShowPasswordButton = () => (
    <IconButton onClick={toggleVisibility} edge="end">
      {visible ? <VisibilityIcon /> : <VisibilityOffIcon />}
    </IconButton>
  );

  return (
    <Container maxWidth="sm" className={classes.root}>
      <form className={classes.wrapper} onSubmit={handleSubmit}>
        <Box className={classes.textInputs}>
          <TextField
            className={classes.inputFields}
            label="Username"
            variant="filled"
            name="username"
            value={form.username}
            onChange={formChange}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton disabled edge="end">
                    <AccountCircleIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
            required
          />
          <TextField
            className={classes.inputFields}
            label="Password"
            variant="filled"
            name="password"
            value={form.password}
            onChange={formChange}
            type={visible ? "text" : "password"}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <ShowPasswordButton />
                </InputAdornment>
              ),
            }}
            required
          />
          <TextField
            className={classes.inputFields}
            label="Confirm Password"
            variant="filled"
            name="confirmPassword"
            value={form.confirmPassword}
            onChange={formChange}
            error={!isValid}
            helperText={isValid ? "" : "Passwords don't match"}
            type={visible ? "text" : "password"}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <ShowPasswordButton />
                </InputAdornment>
              ),
            }}
            required
          />
        </Box>
        <Box className={classes.wrapper}>
          <FormControl component="fieldset" required>
            <FormLabel component="legend">Role</FormLabel>
            <RadioGroup
              aria-label="role"
              name="userRole"
              value={form.userRole}
              onChange={formChange}
              className={classes.wrapper}
            >
              <FormControlLabel
                value="plumber"
                control={<Radio />}
                label="Plumber"
              />
              <FormControlLabel
                value="electrician"
                control={<Radio />}
                label="Electrician"
              />
            </RadioGroup>
          </FormControl>
        </Box>
        <Box className={classes.formButtons}>
          <Button
            color="primary"
            disabled={!form.username || !isValid || !form.userRole}
            variant="contained"
            size={mobileBreak ? "large" : "medium"}
            disableElevation
            type="submit"
            onClick={() => handleClickOpen()}
          >
            Register
          </Button>
          <Button
            variant="contained"
            size={mobileBreak ? "large" : "medium"}
            onClick={clearForm}
            disableElevation
          >
            Clear
          </Button>
        </Box>
      </form>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="register-dialog-title"
      >
        <DialogTitle id="register-dialog-title">Register User</DialogTitle>
        <DialogContent>
          <DialogContentText>You did it!</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onclick={handleClose}>OK...</Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};
