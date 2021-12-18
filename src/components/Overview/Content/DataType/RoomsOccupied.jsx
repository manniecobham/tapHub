import React, { useContext } from "react";
import { useTheme } from "styled-components";
import Context from "../../../../context/context";

import liveIcon from "../../../../images/Overview/liveIcon.svg";
import mouse from "../../../../images/Overview/mouse.svg";
import { Card } from "../../../../styles/UI/Card.styled";

const RoomsOccupied = (props) => {
  const theme = useTheme();
  const context = useContext(Context);
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
          <span className="lead">
            {
              context["userData"]["devices"][0]["metrics"][0]["roomsOccupied"][
                "value1"
              ]
            }
          </span>
          /{" "}
          {
            context["userData"]["devices"][0]["metrics"][0]["roomsOccupied"][
              "value2"
            ]
          }
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
