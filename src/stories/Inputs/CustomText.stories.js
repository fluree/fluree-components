import React from "react";
import FormControl from "@material-ui/core/FormControl";
import FilledInput from "@material-ui/core/FilledInput";
import InputLabel from "@material-ui/core/InputLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import WarningIcon from "@material-ui/icons/Warning";
import { FlureeTextInput } from "../../components/CustomTextInput";
import { FlureeBasic } from "../../themes";
import { alert } from "../../themes/colors";

const ErrorComponent = (props) => (
  <div
    style={{
      display: "flex",
      justifyContent: "space-between",
      color: alert,
      fontSize: "0.75rem",
      fontFamily: "Open Sans",
    }}
  >
    {props.children}
    <WarningIcon style={{ color: alert, fontSize: "1.15rem" }} />
  </div>
);

export default {
  title: "Example/Inputs/CustomText",
};

const Template = (args) => (
  <FlureeBasic>
    <FlureeTextInput {...args} />
  </FlureeBasic>
);

export const BasicText = Template.bind({});
BasicText.args = {
  label: "Label",
};

export const TextWithHelper = Template.bind({});
TextWithHelper.args = {
  label: "Label",
  helperText: "Helper text"
}

export const TextWithError = Template.bind({});
TextWithError.args = {
  error: true,
  label: "Label with error",
  helperText: "Error detected"
};
