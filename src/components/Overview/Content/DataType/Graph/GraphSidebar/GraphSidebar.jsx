import React, { useContext } from "react";
import Context from "../../../../../../context/context";

//dummy data
// import jsonResponse from '../../../../../../context/api'

//styles
import { SidebarContainer } from "../../../../../../styles/Overview/Content/DataType/Graph/GraphSidebar/GraphSidebar.styled"

//components
import SensorComponent from "./GraphSidebarItems/SensorComponent";
// import Temperature from "./GraphSidebarItems/Temperature";
// import LightUsage from "./GraphSidebarItems/LightUsage";
// import Humidity from "./GraphSidebarItems/Humidity";
// import Pressure from "./GraphSidebarItems/Pressure";

const GraphSidebar = () => {
  const context = useContext(Context);
  const sensors = context["userData"]["devices"][0]["metricAverages"]

  return (
    <SidebarContainer className="graph-sidebar">
      {sensors.map((sensor) => (
        <SensorComponent className="graph-sidebar__item" contextProp={sensor}/>
      ))}
    </SidebarContainer>
  );
};

export default GraphSidebar;
