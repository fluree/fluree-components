import {
  flureeBlue,
  flurple,
  twilight,
  white,
  lightGrey,
  transparent,
} from "../../themes/colors";

const contained = (color) => ({
  backgroundColor: color,
  border: `2px solid ${color}`,
  color: white,
  "&:hover": {
    backgroundColor: white,
    color: color,
  },
  "&$disabled": {
    borderColor: transparent,
  },
});

const outlined = (color) => ({
  border: `2px solid ${color}`,
  padding: "8px 15px",
  color: color,
  "&:hover": {
    backgroundColor: color,
    color: white,
    borderWidth: "2px",
  },
  "&$disabled": {
    borderWidth: "2px",
    borderColor: lightGrey,
  },
});

const button = {
  root: {
    fontSize: "1rem",
    padding: "8px 15px",
  },
  text: {
    color: twilight,
  },
  textPrimary: {
    color: flureeBlue,
  },
  textSecondary: {
    color: flurple,
  },
  contained: contained(twilight),
  containedPrimary: contained(flureeBlue),
  containedSecondary: contained(flurple),
  outlined: outlined(twilight),
  outlinedPrimary: outlined(flureeBlue),
  outlinedSecondary: outlined(flurple),
  sizeSmall: {
    padding: "2px 10px",
    fontSize: "0.75rem",
  },
  sizeLarge: {
    padding: "14px 20px",
    fontSize: "1.25rem",
  },
  disabled: {
    borderColor: lightGrey,
  },
};

export default button;
