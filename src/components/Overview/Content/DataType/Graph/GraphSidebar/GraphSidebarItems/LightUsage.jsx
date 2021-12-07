import React, { useContext } from "react";
import {
  SidebarContentContainer,
} from "../../../../../../../styles/Overview/Content/DataType/Graph/GraphSidebar/GraphSider.styled";
import Context from "../../../../../../../context/context";
import upPolygon from "../../../../../../../images/Sidebar/upPolygon.svg";

const LightUsage = (props) => {
  const context = useContext(Context);

  return (
    <SidebarContentContainer className={`${props.className}`}>
      <div className="sidebar-content__top">
        <h3>Light Usage</h3>
        <div>
          <img
            style={{ width: "15px", paddingRight: "5px" }}
            src={upPolygon}
            alt="up"
          />
          10.6% mo/mo
        </div>
      </div>
      <div className="sidebar-content__bottom">
        {
          context["userData"]["devices"][0]["metricAverages"]["lightUsage"][
            "currAvgMinPerMonth"
          ]
        }
        m
      </div>
    </SidebarContentContainer>
  );
};

export default LightUsage;
