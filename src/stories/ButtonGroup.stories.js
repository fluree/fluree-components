import React from "react";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { FlureeBasic } from "../themes";

export default {
  title: "Example/ButtonGroup",
  component: ButtonGroup,
  subcomponents: { Button },
};

const Template = (args) => (
  <FlureeBasic>
    <ButtonGroup {...args}>
      <Button>one</Button>
      <Button>two</Button>
      <Button>three</Button>
    </ButtonGroup>
  </FlureeBasic>
);

export const ContainedGroup = Template.bind({});
ContainedGroup.args = {
  variant: "contained",
};

export const ContainedPrimary = Template.bind({});
ContainedPrimary.args = {
  color: "primary",
  variant: "contained",
};

export const ContainedSecondary = Template.bind({});
ContainedSecondary.args = {
  color: "secondary",
  variant: "contained",
};

export const OutlinedGroup = Template.bind({});
OutlinedGroup.args = {
  variant: "outlined",
};

export const OutlinedGroupPrimary = Template.bind({});
OutlinedGroupPrimary.args = {
  variant: "outlined",
  color: "primary",
};

export const OutlinedGroupSecondary = Template.bind({});
OutlinedGroupSecondary.args = {
  variant: "outlined",
  color: "secondary",
};

export const ContainedPrimaryVertical = Template.bind({});
ContainedPrimaryVertical.args = {
  color: "primary",
  variant: "contained",
  orientation: "vertical",
};

export const OutlinedPrimaryVertical = Template.bind({});
OutlinedPrimaryVertical.args = {
  color: "primary",
  variant: "outlined",
  orientation: "vertical",
};
