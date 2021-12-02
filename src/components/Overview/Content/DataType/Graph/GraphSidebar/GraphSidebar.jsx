import React from "react";
import { SidebarContainer } from "../../../../../../styles/Overview/Content/DataType/Graph/Graph.styled";
import SpaceUtilization from "./GraphSidebarItems/SpaceUtilization";
import Temperature from "./GraphSidebarItems/Temperature";
import LightUsage from "./GraphSidebarItems/LightUsage";
import Humidity from "./GraphSidebarItems/Humidity";
import Pressure from "./GraphSidebarItems/Pressure";

const GraphSidebar = () => {
  return (
    <SidebarContainer>
      <SpaceUtilization />
      <Temperature />
      <LightUsage />
      <Humidity />
      <Pressure />
    </SidebarContainer>
  );
};

export default GraphSidebar;
