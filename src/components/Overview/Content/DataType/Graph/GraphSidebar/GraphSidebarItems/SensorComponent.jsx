import React from "react";
import {
  SidebarContentContainer,
} from "../../../../../../../styles/Overview/Content/DataType/Graph/GraphSidebar/GraphSidebar.styled";
// import Context from "../../../../../../../context/context";
import upPolygon from "../../../../../../../images/Sidebar/upPolygon.svg";

const SpaceUtilization = ({className, contextProp}) => {

  return (
    <SidebarContentContainer className={`${className}`}>
      <div className="sidebar-content__top">
        <h3>{contextProp.title}</h3>
        <div>
          {/* <img
            style={{ width: "15px", paddingRight: "5px" }}
            src={upPolygon}
            alt="up"
          /> */}
          {contextProp.data.value2}
        </div>
      </div>
      <div className="sidebar-content__bottom">
        {contextProp.data.value1}
        %
      </div>
    </SidebarContentContainer>
  );
};

export default SpaceUtilization;
