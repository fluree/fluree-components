import React from "react";
import { Button } from "@material-ui/core/";
import { FlureeBasic } from "../themes";

export default {
  title: "Example/Button",
  component: Button,
};

const Template = (args) => (
  <FlureeBasic>
    <Button {...args}>Button</Button>
  </FlureeBasic>
);

export const SmallButton = Template.bind({});
SmallButton.args = {
  size: "small",
  variant: "contained",
};

export const MediumButton = Template.bind({});
MediumButton.args = {
  size: "medium",
  variant: "contained",
};

export const LargeButton = Template.bind({});
LargeButton.args = {
  size: "large",
  variant: "contained",
};

// export const XLargeButton = Template.bind({});
// XLargeButton.args = {
//   size: "xl",
// };

export const Text = Template.bind({});
Text.args = {
  variant: "text",
};

export const PrimaryText = Template.bind({});
PrimaryText.args = {
  variant: "text",
  color: "primary",
};

export const SecondaryText = Template.bind({});
SecondaryText.args = {
  variant: "text",
  color: "secondary",
};

export const BlueFilled = Template.bind({});
BlueFilled.args = {
  variant: "contained",
  color: "primary",
  disableElevation: true,
  size: "medium",
};

export const TwilightFilled = Template.bind({});
TwilightFilled.args = {
  variant: "contained",
  disableElevation: true,
  size: "medium",
};

export const FlurpleFilled = Template.bind({});
FlurpleFilled.args = {
  color: "secondary",
  variant: "contained",
  disableElevation: true,
  size: "medium",
};

export const BlueShadow = Template.bind({});
BlueShadow.args = {
  color: "primary",
  variant: "contained",
  size: "medium",
};

export const TwilightShadow = Template.bind({});
TwilightShadow.args = {
  variant: "contained",
  size: "medium",
};

export const FlurpleShadow = Template.bind({});
FlurpleShadow.args = {
  variant: "contained",
  color: "secondary",
  size: "medium",
};

export const BlueOutline = Template.bind({});
BlueOutline.args = {
  color: "primary",
  variant: "outlined",
  size: "medium",
};

export const TwilightOutline = Template.bind({});
TwilightOutline.args = {
  variant: "outlined",
  size: "medium",
};

export const FlurpleOutline = Template.bind({});
FlurpleOutline.args = {
  color: "secondary",
  variant: "outlined",
  size: "medium",
};
