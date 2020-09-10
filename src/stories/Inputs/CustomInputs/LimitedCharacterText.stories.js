import React from "react";
import LimitedTextInput from "../../../components/CustomInputs/LimitedTextInput";
import { FlureeBasic } from "../../../themes";

export default {
  title: "Inputs/Custom Text/Limited Characters",
};

const Template = (args) => (
  <FlureeBasic>
    <LimitedTextInput {...args} />
  </FlureeBasic>
)

export const CharacterLimitedTextInput = Template.bind({});
CharacterLimitedTextInput.args = {
  label: "Limited Characters",
  maxLength: 10
}

export const MultiLineLimitedTextInput = Template.bind({});
MultiLineLimitedTextInput.args = {
  maxLength: 50,
  label: "Multi-line",
  multiline: true,
}