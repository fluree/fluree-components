import React from "react";
import { Checkbox } from "@material-ui/core";
import { FlureeBasic } from "../../themes";

export default {
  title: "Inputs/Checkbox",
  component: Checkbox,
};

const Template = (args) => (
  <FlureeBasic>
    <Checkbox {...args} />
  </FlureeBasic>
);

export const DefaultCheckbox = Template.bind({});
DefaultCheckbox.parameters = {
  docs: {
    source: {
      code: "<Checkbox />",
    },
  },
};

export const DefaultCheckedbox = Template.bind({});
DefaultCheckedbox.args = {
  defaultChecked: true,
};
DefaultCheckedbox.parameters = {
  docs: {
    source: {
      code: "<Checkbox defaultChecked/>",
    },
  },
};

export const BlueCheckbox = Template.bind({});
BlueCheckbox.args = {
  color: "primary",
};
BlueCheckbox.parameters = {
  docs: {
    source: {
      code: '<Checkbox color="primary" />',
    },
  },
};

export const DisabledCheckbox = Template.bind({});
DisabledCheckbox.args = {
  disabled: true,
  checked: true,
};
DisabledCheckbox.parameters = {
  docs: {
    source: {
      code: "<Checkbox disabled checked />",
    },
  },
};

export const IndeterminateCheckbox = Template.bind({});
IndeterminateCheckbox.args = {
  indeterminate: true,
};
IndeterminateCheckbox.parameters = {
  docs: {
    source: {
      code: "<Checkbox indeterminate />",
    },
  },
};

export const SmallCheckbox = Template.bind({});
SmallCheckbox.args = {
  size: "small",
};
SmallCheckbox.parameters = {
  docs: {
    source: {
      code: '<Checkbox size="small" />',
    },
  },
};
