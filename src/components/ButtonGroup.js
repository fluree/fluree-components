import React from "react";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { FlureeBasic } from "../themes";

const FlureeGroup = (props) => {
  return (
    <FlureeBasic>
      <ButtonGroup {...props}>{props.children}</ButtonGroup>
    </FlureeBasic>
  );
};

export default FlureeGroup;