import React from "react";
import Button from "../components/Button";

export default {
  title: "Example/FlureeButton",
  component: Button,
};

const Template = (args) => <Button {...args}>Button</Button>;

export const SmallButton = Template.bind({});
SmallButton.args = {
  size: "sm",
  color: "blue",
};

export const MediumButton = Template.bind({});
MediumButton.args = {
  size: "md",
};

export const LargeButton = Template.bind({});
LargeButton.args = {
  size: "lg",
};

export const XLargeButton = Template.bind({});
XLargeButton.args = {
  size: "xl",
};

export const BlueFilled = Template.bind({});
BlueFilled.args = {};

export const TwilightFilled = Template.bind({});
TwilightFilled.args = {
  color: "twilight",
};

export const FlurpleFilled = Template.bind({});
FlurpleFilled.args = {
  color: "flurple",
};

export const BlueShadow = Template.bind({});
BlueShadow.args = {
  dropShadow: true,
};

export const TwilightShadow = Template.bind({});
TwilightShadow.args = {
  dropShadow: true,
  color: "twilight",
};

export const FlurpleShadow = Template.bind({});
FlurpleShadow.args = {
  dropShadow: true,
  color: "flurple",
};

export const BlueOutline = Template.bind({});
BlueOutline.args = {
  color: "blue",
  type: "outline",
};

export const TwilightOutline = Template.bind({});
TwilightOutline.args = {
  color: "twilight",
  type: "outline",
};

export const FlurpleOutline = Template.bind({});
FlurpleOutline.args = {
  color: "flurple",
  type: "outline",
};
