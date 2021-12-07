import React, { useContext } from "react";
import Context from "../../../../../../context/context";

//styles
import { SidebarContainer } from "../../../../../../styles/Overview/Content/DataType/Graph/GraphSidebar/GraphSider.styled"

//components
import SpaceUtilization from "./GraphSidebarItems/SpaceUtilization";
import Temperature from "./GraphSidebarItems/Temperature";
import LightUsage from "./GraphSidebarItems/LightUsage";
import Humidity from "./GraphSidebarItems/Humidity";
import Pressure from "./GraphSidebarItems/Pressure";

const GraphSidebar = () => {
  const context = useContext(Context);

  return (
    <SidebarContainer className="graph-sidebar">
      <SpaceUtilization className="graph-sidebar__item" contextProp={context}/>
      <Temperature className="graph-sidebar__item"/>
      <LightUsage className="graph-sidebar__item"/>
      <Humidity className="graph-sidebar__item"/>
      <Pressure className="graph-sidebar__item"/>
    </SidebarContainer>
  );
};

export default GraphSidebar;
