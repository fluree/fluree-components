import {
  flureeBlue,
  flurple,
  textFieldBack,
  darkGrey,
  twilight,
  alert
} from "../colors";

const filledInput = {
  root: {
    backgroundColor: textFieldBack,
    caretColor: flureeBlue,
    color: darkGrey,
    "&$focused": {
      color: twilight
    },
    "&$error": {
      caretColor: alert
    }
  },
  colorSecondary: {
    caretColor: flurple,
  },
};

export default filledInput;
