import React from "react";

import { OverviewGrid } from "../../../styles/Overview/Content/OverviewContent.styled";

import CO2Reduction from "./DataType/CO2Reduction";
import HCWasted from "./DataType/HCWasted";
import LightWasted from "./DataType/LightWasted";
import RoomsOccupied from "./DataType/RoomsOccupied";
import Spaces from "./DataType/Spaces/Spaces";
import Graph from "./DataType/Graph/Graph";

const Content = () => {
  return (
    <OverviewGrid className="overview-grid">
      <Spaces classes="overview-grid__item overview-grid__item-location" />
      <RoomsOccupied classes="overview-grid__item overview-grid__item-rooms" />
      <CO2Reduction classes="overview-grid__item overview-grid__item-co2" />
      <LightWasted classes="overview-grid__item overview-grid__item-lightwaste" />
      <HCWasted classes="overview-grid__item overview-grid__item-hcwaste" />
      <Graph classes="overview-grid__item-graph" />
    </OverviewGrid>
  );
};

export default Content;
