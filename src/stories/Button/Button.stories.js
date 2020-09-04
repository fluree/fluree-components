import React from "react";
import { Button } from "@material-ui/core/";
import { FlureeBasic } from "../../themes";

export default {
  title: "Example/Button",
  component: Button,
  argTypes: {
    size: {
      description: "The size of the button",
      table: {
        type: {
          summary: "'small' | 'medium' | 'large'",
        },
        defaultValue: { summary: "'medium'" },
      },
      control: {
        type: "inline-radio",
        options: ["small", "medium", "large"],
      },
    },
    variant: {
      description: "The button's overall shape",
      table: {
        type: {
          summary: "'text' | 'contained' | 'outlined'",
        },
        defaultValue: { summary: "'text'" },
      },
      control: {
        type: "inline-radio",
        options: ["text", "contained", "outlined"],
      },
    },
    color: {
      description: "The color of the button",
      table: {
        type: {
          summary: "'default' | 'inherit' | 'primary' | 'secondary'",
        },
        defaultValue: { summary: "'default'" },
      },
      control: {
        type: "inline-radio",
        options: ["default", "primary", "secondary", "inherit"],
      },
    },
    disableElevation: {
      description: "Remove the drop shadow",
      table: {
        type: {
          summary: "bool",
        },
        defaultValue: { summary: "false" },
      },
      control: {
        type: "boolean",
      },
    },
    disabled: {
      description: "Disables the button",
      table: {
        type: {
          summary: "bool",
        },
        defaultValue: {
          summary: "false",
        },
      },
      control: {
        type: "boolean",
      },
    },
    onClick: { action: "*click*", description: null },
  },
};

const Template = (args) => (
  <FlureeBasic>
    <Button {...args}>Button</Button>
  </FlureeBasic>
);

export const DefaultButton = Template.bind({});
DefaultButton.args = {};
DefaultButton.parameters = {
  docs: {
    source: {
      code: `<Button>Button</Button>`,
    },
  },
};

export const SmallButton = Template.bind({});
SmallButton.args = {
  size: "small",
  variant: "contained",
};
SmallButton.parameters = {
  docs: {
    source: {
      code: "<Button variant='contained' size='small'>Button</Button>",
    },
  },
};

export const MediumButton = Template.bind({});
MediumButton.args = {
  size: "medium",
  variant: "contained",
};
MediumButton.parameters = {
  docs: {
    source: {
      code: "<Button variant='contained'>Button</Button>",
    },
  },
};

export const LargeButton = Template.bind({});
LargeButton.args = {
  size: "large",
  variant: "contained",
};
LargeButton.parameters = {
  docs: {
    source: {
      code: "<Button variant='contained' size='large'>Button</Button>",
    },
  },
};

export const Text = Template.bind({});
Text.args = {
  variant: "text",
};
Text.parameters = {
  docs: {
    source: {
      code: "<Button variant='text'>Button</Button>",
    },
  },
};

export const FlureeBlueText = Template.bind({});
FlureeBlueText.args = {
  variant: "text",
  color: "primary",
};
FlureeBlueText.parameters = {
  docs: {
    source: {
      code: "<Button variant='text' color='primary'>Button</Button>",
    },
  },
};

export const FlurpleText = Template.bind({});
FlurpleText.args = {
  variant: "text",
  color: "secondary",
};
FlurpleText.parameters = {
  docs: {
    source: {
      code: "<Button variant='text' color='secondary'>Button</Button>",
    },
  },
};
export const DisabledTextButton = Template.bind({});
DisabledTextButton.args = {
  disabled: true,
};
DisabledTextButton.parameters = {
  docs: {
    source: {
      code: "<Button disabled>Button</Button>",
    },
  },
};

export const FlureeBlueContained = Template.bind({});
FlureeBlueContained.args = {
  variant: "contained",
  color: "primary",
  disableElevation: true,
};
FlureeBlueContained.parameters = {
  docs: {
    source: {
      code:
        "<Button variant='contained' color='primary' disableElevation>Button</Button>",
    },
  },
};

export const TwilightContained = Template.bind({});
TwilightContained.args = {
  variant: "contained",
  disableElevation: true,
};
TwilightContained.parameters = {
  docs: {
    source: {
      code: "<Button variant='contained' disableElevation>Button</Button>",
    },
  },
};

export const FlurpleContained = Template.bind({});
FlurpleContained.args = {
  color: "secondary",
  variant: "contained",
  disableElevation: true,
};
FlurpleContained.parameters = {
  docs: {
    source: {
      code:
        "<Button variant='contained' color='secondary' disableElevation>Button</Button>",
    },
  },
};

export const DisabledContainedButton = Template.bind({});
DisabledContainedButton.args = {
  disabled: true,
  variant: "contained",
};
DisabledContainedButton.parameters = {
  docs: {
    source: {
      code: "<Button variant='contained' disabled>Button</Button>",
    },
  },
};

export const TwilightShadow = Template.bind({});
TwilightShadow.args = {
  variant: "contained",
};
TwilightShadow.parameters = {
  docs: {
    source: {
      code: "<Button variant='contained'>Button</Button>",
    },
  },
};

export const FlureeBlueShadow = Template.bind({});
FlureeBlueShadow.args = {
  color: "primary",
  variant: "contained",
};
FlureeBlueShadow.parameters = {
  docs: {
    source: {
      code: "<Button variant='contained' color='primary'>Button</Button>",
    },
  },
};

export const FlurpleShadow = Template.bind({});
FlurpleShadow.args = {
  variant: "contained",
  color: "secondary",
};
FlurpleShadow.parameters = {
  docs: {
    source: {
      code: "<Button variant='contained' color='secondary'>Button</Button>",
    },
  },
};
export const TwilightOutline = Template.bind({});
TwilightOutline.args = {
  variant: "outlined",
};
TwilightOutline.parameters = {
  docs: {
    source: {
      code: "<Button variant='outlined'>Button</Button>",
    },
  },
};

export const FlureeBlueOutline = Template.bind({});
FlureeBlueOutline.args = {
  color: "primary",
  variant: "outlined",
};
FlureeBlueOutline.parameters = {
  docs: {
    source: {
      code: "<Button variant='outlined' color='primary'>Button</Button>",
    },
  },
};

export const FlurpleOutline = Template.bind({});
FlurpleOutline.args = {
  color: "secondary",
  variant: "outlined",
};
FlurpleOutline.parameters = {
  docs: {
    source: {
      code: "<Button variant='outlined' color='secondary'>Button</Button>",
    },
  },
};

export const DisabledOutlinedButton = Template.bind({});
DisabledOutlinedButton.args = {
  disabled: true,
  variant: "outlined",
};
DisabledOutlinedButton.parameters = {
  docs: {
    source: {
      code: "<Button variant='outlined' disabled>Button</Button>",
    },
  },
};
