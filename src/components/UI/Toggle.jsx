import { attachEventProps } from "@aws-amplify/ui-react/lib-esm/react-component-lib/utils";
import React from "react";
import ToggleButton from "../../styles/UI/ToggleButton.styled";

const Toggle = (props) => {
  return (
    <ToggleButton>
      <img src={props.src} alt={props.alt} />
    </ToggleButton>
  );
};

export default Toggle;
