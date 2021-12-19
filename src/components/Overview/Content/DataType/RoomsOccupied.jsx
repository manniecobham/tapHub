import React from "react";
import { useTheme } from "styled-components";

import liveIcon from "../../../../images/Overview/liveIcon.svg";
import mouse from "../../../../images/Overview/mouse.svg";
import { Card } from "../../../../styles/UI/Card.styled";

const RoomsOccupied = (props) => {
  const theme = useTheme();
  const bgColor = theme.colors.colorSecondaryWhite;

  return (
    <Card backgroundColor={bgColor} className={`card ${props.classes}`}>
      <div className="card__header">
        <h2 className="card__header-title">Rooms Occupied</h2>
        <div>
          <img src={liveIcon} alt="live" />
        </div>
      </div>
      <div className="card__content">
        <p>
          <span className="lead">{props.roomData.value1}</span>/
          {props.roomData.value2}
        </p>
      </div>
      <div className="card__footer">
        <div></div>
        <img src={mouse} alt="^"></img>
      </div>
    </Card>
  );
};

export default RoomsOccupied;
