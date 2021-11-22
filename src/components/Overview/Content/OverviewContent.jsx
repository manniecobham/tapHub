import React from "react";
import { useTheme } from "styled-components";
import { OverviewGrid } from "../../../styles/Overview/Content/OverviewContent.styled";
import CO2Reduction from "./DataType/CO2Reduction";
import HCWasted from "./DataType/HCWasted";
import LightWasted from "./DataType/LightWasted";
import RoomsOccupied from "./DataType/RoomsOccupied";
import Location from "./DataType/Location/Location";
import Graph from "./DataType/Graph";

const OverviewContent = () => {
  const theme = useTheme();
  const bgColor = theme.colors.colorSecondaryWhite;

  return (
    <OverviewGrid>
      <Location classes="location grid--item" />
      <RoomsOccupied classes="rooms grid--item grid--item_small" />
      <CO2Reduction classes="co2 grid--item grid--item_small" />
      <LightWasted classes="lightwaste grid--item grid--item_small" />
      <HCWasted classes="hcwaste grid--item grid--item_small" />
      <Graph classes="graph grid--item" />
    </OverviewGrid>
  );
};

export default OverviewContent;
