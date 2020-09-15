import React from "react";
import TextField from "@material-ui/core/TextField";


export default {
  title: "Inputs/TextField",
  component: TextField,
};

const Template = (args) => (
    <TextField {...args} />
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
      code: '<Textfield label="Floating label" variant="filled" value="Input text" helperText="Helper Text" />',
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

export const DisabledText = Template.bind({});
DisabledText.args = {
  disabled: true,
  variant: "filled",
  label: "Disabled text"
}

export const MultiLineText = Template.bind({});
MultiLineText.args = {
  variant: "filled",
  label: "Multi-line label",
  multiline: true
}