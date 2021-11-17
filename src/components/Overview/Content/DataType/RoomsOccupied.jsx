import React, { useContext } from "react";
import lightningIcon from "../../../../images/card_data/lightning.png";
import dollarIcon from "../../../../images/card_data/dollar.png";
import ToggleGroup from "../../../UI/ToggleGroup";
import CardHeader from "../../../../styles/UI/Card/CardHeader.styled";
import CardTitle from "../../../../styles/UI/Card/CardTitle.styled";
import CardFooter from "../../../../styles/UI/Card/CardFooter.styled";
import CardContent from "../../../../styles/UI/Card/CardContent.styled";
import { useTheme } from "styled-components";
import Context from "../../../../context/context";

const RoomsOccupied = () => {
  const theme = useTheme();
  const context = useContext(Context);
  const titleSize = theme.typography.headerSize;

  return (
    <React.Fragment>
      <CardHeader>
        <CardTitle titleSize={titleSize}>Rooms Occupied</CardTitle>
        <ToggleGroup
          src1={lightningIcon}
          alt1="lightning"
          src2={dollarIcon}
          alt2="dollar"
        />
      </CardHeader>
      <CardContent>
        <p>
          <span className="lead">
            {context["userData"]["floors"]["first"]["rooms_occupied"]}
          </span>
          /56
        </p>
      </CardContent>
      <CardFooter>
        <div></div>
        <img alt="^"></img>
      </CardFooter>
    </React.Fragment>
  );
};

export default RoomsOccupied;
