import React, { useContext } from "react";
// import Context from "../../../../../../context/context";

//dummy data
import jsonResponse from '../../../../../../context/api'

//styles
import { SidebarContainer } from "../../../../../../styles/Overview/Content/DataType/Graph/GraphSidebar/GraphSider.styled"

//components
import SpaceUtilization from "./GraphSidebarItems/SpaceUtilization";
// import Temperature from "./GraphSidebarItems/Temperature";
// import LightUsage from "./GraphSidebarItems/LightUsage";
// import Humidity from "./GraphSidebarItems/Humidity";
// import Pressure from "./GraphSidebarItems/Pressure";

const GraphSidebar = () => {
  // const context = useContext(Context);
  // const sensor = context["userData"]["devices"][0]["metricAverages"]
  // const result = Object.keys(sensor).map((key) => [(key), sensor[key]]);

  // console.log(sensor)
  // console.log(result);

  const sensors = jsonResponse["devices"][0]["metricAverages"];
  console.log(sensors)
  return (
    <SidebarContainer className="graph-sidebar">
      {sensors.map((sensor) => (
        <SpaceUtilization className="graph-sidebar__item" contextProp={sensor}/>

      ))}
      {/* <Temperature className="graph-sidebar__item"/>
      <LightUsage className="graph-sidebar__item"/>
      <Humidity className="graph-sidebar__item"/>
      <Pressure className="graph-sidebar__item"/> */}
    </SidebarContainer>
  );
};

export default GraphSidebar;
