import React, { useContext } from "react";
import { useTheme } from "styled-components";
import Context from "../../../../context/context";

import liveIcon from "../../../../images/Overview/liveIcon.svg";
import mouse from "../../../../images/Overview/mouse.svg";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "../../../../styles/UI/Card.styled";

const RoomsOccupied = (props) => {
  const theme = useTheme();
  const context = useContext(Context);
  const titleSize = theme.typography.headerSize;
  const bgColor = theme.colors.colorSecondaryWhite;

  return (
    <Card backgroundColor={bgColor} className={`${props.classes}`}>
      <CardHeader>
        <CardTitle titleSize={titleSize}>Rooms Occupied</CardTitle>
        <div>
          <img src={liveIcon} alt="live" />
        </div>
      </CardHeader>
      <CardContent>
        <p>
          <span className="lead">
            {
              context["userData"]["devices"][0]["metrics"]["roomsOccupied"][
                "currentOccupied"
              ]
            }
          </span>
          /{" "}
          {
            context["userData"]["devices"][0]["metrics"]["roomsOccupied"][
              "totalDevices"
            ]
          }
        </p>
      </CardContent>
      <CardFooter>
        <div></div>
        <img src={mouse} alt="^"></img>
      </CardFooter>
    </Card>
  );
};

export default RoomsOccupied;
