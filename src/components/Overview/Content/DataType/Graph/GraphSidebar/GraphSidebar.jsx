import React, { useContext } from "react";
import Context from "../../../../../../context/context";

//dummy data
// import jsonResponse from '../../../../../../context/api'

//styles
import { SidebarContainer } from "../../../../../../styles/Overview/Content/DataType/Graph/GraphSidebar/GraphSidebar.styled";

//components
import SensorComponent from "./GraphSidebarItems/SensorComponent";

const GraphSidebar = (props) => {
  const context = useContext(Context);
  const sensors = context["userData"]["devices"][0]["metricAverages"];

  return (
    <SidebarContainer
      className={`graph-sidebar ${
        props.hamburgerIsOpen ? "graph-sidebar--hamburger-open" : ""
      }`}
    >
      {sensors.map((sensor, index) => (
        <SensorComponent
          key={index}
          className={`graph-sidebar__item`}
          contextProp={sensor}
        />
      ))}
    </SidebarContainer>
  );
};

export default GraphSidebar;
