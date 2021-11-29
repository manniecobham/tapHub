import React from "react";
import locationIcon from "../../../../../images/Overview/locationIcon.svg";
import { StateContainer } from "../../../../../styles/Overview/Content/DataType/Location/Location.styled";

const State = (props) => {
  return (
    <StateContainer>
      <img
        src={locationIcon}
        alt="location"
        style={{ width: "11px", height: "14px", margin: "auto" }}
      />
      <p>{props.stateAbbr}</p>
    </StateContainer>
  );
};

export default State;
