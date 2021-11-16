import { attachEventProps } from "@aws-amplify/ui-react/lib-esm/react-component-lib/utils";
import React from "react";
import ToggleContainer from "../../styles/UI/ToggleContainer.styled";
import Toggle from "./Toggle";

const ToggleGroup = (props) => {
  return (
    <ToggleContainer>
      <Toggle src={props.src1} alt={props.alt1} />
      <Toggle src={props.src2} alt={props.alt2} />
    </ToggleContainer>
  );
};

export default ToggleGroup;
