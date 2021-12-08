import React, { useContext } from "react";
import {
  SidebarContentContainer,
} from "../../../../../../../styles/Overview/Content/DataType/Graph/GraphSidebar/GraphSider.styled";
import Context from "../../../../../../../context/context";
import upPolygon from "../../../../../../../images/Sidebar/upPolygon.svg";

const SpaceUtilization = ({className, contextProp}) => {
  const context = useContext(Context);

  console.log(contextProp)
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
          {contextProp.data.changeComfort}
          {/* 2.1% dd/dd */}
        </div>
      </div>
      <div className="sidebar-content__bottom">
        {contextProp.data.current}
        {/* {
          context["userData"]["devices"][0]["metricAverages"][
            "spaceUtilization"
          ]["currPercentOccupied"]
        } */}
        %
      </div>
    </SidebarContentContainer>
  );
};

export default SpaceUtilization;
