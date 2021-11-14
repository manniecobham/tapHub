import React from "react";
import { useTheme } from "styled-components";
import Card from "../../../styles/UI/Card/Card.styled";
import CardData from "./CardData";
import OverviewGrid from "../../../styles/Overview/Content/OverviewGrid.styled";

const OverviewContent = () => {
  const theme = useTheme();
  const bgColor = theme.colors.colorSecondaryWhite;

  return (
    <OverviewGrid>
      <Card backgroundColor={bgColor} className="location grid--item">
        <CardData type="LOCATION" />
      </Card>
      <Card
        backgroundColor={bgColor}
        className="rooms grid--item grid--item_small"
      >
        <CardData type="ROOM" />
      </Card>
      <Card
        backgroundColor={bgColor}
        className="co2 grid--item grid--item_small"
      >
        <CardData type="CO2" />
      </Card>
      <Card
        backgroundColor={bgColor}
        className="lightwaste grid--item grid--item_small"
      >
        <CardData type="LIGHT" />
      </Card>
      <Card
        backgroundColor={bgColor}
        className="hcwaste grid--item grid--item_small"
      >
        <CardData type="HC" />
      </Card>
      <Card backgroundColor={bgColor} className="graph grid--item">
        <CardData type="GRAPH" />
      </Card>
    </OverviewGrid>
  );
};

export default OverviewContent;
