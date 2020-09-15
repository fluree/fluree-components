import React from "react";
import Switch from "@material-ui/core/Switch";

export default {
  title: "Inputs/Switch",
  component: Switch
}

const Template = args => (
    <Switch {...args} />
)

export const DefaultSwitch = Template.bind({});

export const BlueSwitch = Template.bind({});
BlueSwitch.args = {
  color: "primary"
}

export const DisabledSwitch = Template.bind({});
DisabledSwitch.args = {
  disabled: true
}