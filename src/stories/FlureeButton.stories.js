import React from "react";
import FlureeButton from "../components/FlureeButton";

export default {
  title: "Example/FlureeButton",
  component: FlureeButton,
};

const Template = (args) => <FlureeButton {...args}>Button</FlureeButton>;

export const Blue = Template.bind({});
Blue.args = {};

export const Twilight = Template.bind({});
Twilight.args = {
  color: "twilight",
};

export const Flurple = Template.bind({});
Flurple.args = {
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
