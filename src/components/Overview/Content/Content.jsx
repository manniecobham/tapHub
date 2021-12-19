import React from "react";

import { OverviewGrid } from "../../../styles/Overview/Content/OverviewContent.styled";

import CO2Reduction from "./DataType/CO2Reduction";
import HCWasted from "./DataType/HCWasted";
import LightWasted from "./DataType/LightWasted";
import RoomsOccupied from "./DataType/RoomsOccupied";
import Spaces from "./DataType/Spaces/Spaces";
import Graph from "./DataType/Graph/Graph";

const Content = (props) => {
  return (
    <OverviewGrid className="overview-grid">
      <Spaces classes="overview-grid__item overview-grid__item-location" />
      <RoomsOccupied
        roomData={
          props.overviewData.space.setOfDevices.metrics[0].roomsOccupied
        }
        classes="overview-grid__item overview-grid__item-rooms"
      />
      <CO2Reduction
        co2Data={props.overviewData.space.setOfDevices.metrics[1].co2Reduction}
        classes="overview-grid__item overview-grid__item-co2"
      />
      <LightWasted
        lightData={props.overviewData.space.setOfDevices.metrics[2].lightWasted}
        classes="overview-grid__item overview-grid__item-lightwaste"
      />
      <HCWasted
        hcData={props.overviewData.space.setOfDevices.metrics[3].hcWasted}
        classes="overview-grid__item overview-grid__item-hcwaste"
      />
      <Graph graphData={false} classes="overview-grid__item-graph" />
    </OverviewGrid>
  );
};

export default Content;
