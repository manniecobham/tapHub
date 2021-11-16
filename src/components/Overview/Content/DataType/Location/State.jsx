import React from "react";
import StateContainer from "../../../../../styles/Overview/Content/DataType/Location/StateContainer.styled";

const State = (props) => {
  return (
    <StateContainer>
      <p>^</p>
      <p>{props.stateAbbr}</p>
    </StateContainer>
  );
};

export default State;
