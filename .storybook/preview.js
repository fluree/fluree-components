import StylesDecorator from "./styles-decorator";
import React from "react";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

export const decorators = [(Story) => StylesDecorator(Story)]