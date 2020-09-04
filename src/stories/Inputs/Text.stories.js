import React from "react";
import TextField from "@material-ui/core/TextField";
import { FlureeBasic } from "../../themes";


export default {
  title: "Example/Inputs/Text",
  component: TextField,
};

const Template = (args) => (
  <FlureeBasic>
    <TextField {...args} />
  </FlureeBasic>
);

export const StandardText = Template.bind({});
StandardText.args = {
  label: "Label",
  variant: "filled",
};
StandardText.parameters = {
  docs: {
    source: {
      code: '<TextField label="Label" variant="filled" />',
    },
  },
};

export const TextWithHelper = Template.bind({});
TextWithHelper.args = {
  label: "Floating label",
  value: "Input text",
  variant: "filled",
  helperText: "Helper Text",
};
TextWithHelper.parameters = {
  docs: {
    source: {
      code: '<Textfield label="Filled" variant="filled" />',
    },
  },
};

export const TextWithError = Template.bind({});
TextWithError.args = {
  variant: "filled",
  label: "Floating label",
  value: "Input",
  error: true,
  helperText: "Error Message",
};

export const OutlinedText = Template.bind({});
OutlinedText.args = {
  label: "Outlined",
  variant: "outlined",
};
OutlinedText.parameters = {
  docs: {
    source: {
      code: '<TextField label="Outlined" variant="outlined" />',
    },
  },
};
