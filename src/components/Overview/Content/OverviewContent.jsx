import React from "react";
import { useTheme } from "styled-components";
import { Card } from "../../../styles/UI/Card.styled";
import CardData from "./CardData";
import { OverviewGrid } from "../../../styles/Overview/Content/OverviewContent.styled";
import CO2Reduction from "./DataType/CO2Reduction";
import HCWasted from "./DataType/HCWasted";
import LightWasted from "./DataType/LightWasted";
import RoomsOccupied from "./DataType/RoomsOccupied";

const OverviewContent = () => {
  const theme = useTheme();
  const bgColor = theme.colors.colorSecondaryWhite;

  return (
    <OverviewGrid>
      <Card backgroundColor={bgColor} className="location grid--item">
        <CardData type="LOCATION" />
      </Card>
      <RoomsOccupied classes="rooms grid--item grid--item_small" />
      <CO2Reduction classes="co2 grid--item grid--item_small" />
      <LightWasted classes="lightwaste grid--item grid--item_small" />
      <HCWasted classes="hcwaste grid--item grid--item_small" />
      <Card backgroundColor={bgColor} className="graph grid--item">
        <CardData type="GRAPH" />
      </Card>
    </OverviewGrid>
  );
};

export default OverviewContent;
