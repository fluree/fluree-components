import React from "react";
import { Radio } from "@material-ui/core";
import { FlureeBasic } from "../../themes";

export default {
  title: "Inputs/Radio",
  component: Radio,
};

const Template = (args) => (
  <FlureeBasic>
    <Radio {...args} />
  </FlureeBasic>
);

export const DefaultRadio = Template.bind({});
DefaultRadio.parameters = {
  docs: {
    source: {
      code: '<Radio />'
    }
  }
}

export const BlueRadio = Template.bind({});
BlueRadio.args = {
  color: "primary",
};
BlueRadio.parameters = {
  docs: {
    source: {
      code: '<Radio color="primary" />',
    },
  },
};

export const DisabledRadio = Template.bind({});
DisabledRadio.args = {
  disabled: true,
};
DisabledRadio.parameters = {
  docs: {
    source: {
      code: '<Radio disabled />'
    }
  }
}