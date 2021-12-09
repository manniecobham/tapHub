import React from "react";
import {
  SidebarContentContainer,
} from "../../../../../../../styles/Overview/Content/DataType/Graph/GraphSidebar/GraphSidebar.styled";
import upPolygon from "../../../../../../../images/Sidebar/upPolygon.svg";

const SensorComponent = ({className, contextProp}) => {

  var arrow;
  var timeframe;
  var units;
  var changeUnits;

  if (contextProp.title === "Space Utilization") {
    timeframe = "dd/dd";
    units = "%";
    changeUnits = "%";
    arrow = 
      <img
        style={{ width: "15px", paddingRight: "5px" }}
        src={upPolygon}
        alt="up"
      />
  } else if (contextProp.title === "temperature") {
    timeframe = "dd/dd";
    units = <span>&deg;F</span>;
    changeUnits = "%";
    arrow = 
      <img
        style={{ width: "15px", paddingRight: "5px" }}
        src={upPolygon}
        alt="up"
      />
  } else if (contextProp.title === "Light Usage") {
    timeframe = "mo/mo";
    units = "m";
    changeUnits = "%";
    arrow = 
      <img
        style={{ width: "15px", paddingRight: "5px" }}
        src={upPolygon}
        alt="up"
      />
  } else if (contextProp.title === "Humidity") {
    timeframe = "";
    units = "%";
    changeUnits = "";
    arrow = "";
  } else if (contextProp.title === "Pressure") {
    timeframe = "";
    units = " kPa";
    changeUnits = "";
    arrow = "";
  }

  return (
    <SidebarContentContainer className={`${className}`}>
      <div className="sidebar-content__top">
        <div className="sidebar-content__top-title">
          <h4>{contextProp.title}</h4>
        </div>
        <div className="sidebar-content__top-value2">
          {arrow} {contextProp.data.value2}{changeUnits} {timeframe}
        </div>
      </div>
      <div className="sidebar-content__bottom">
        <div className="sidebar-content__bottom-value1">
          {contextProp.data.value1}{units} 
        </div>
      </div>
    </SidebarContentContainer>
  );
};

export default SensorComponent;
