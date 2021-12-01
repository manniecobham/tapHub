import React, { useContext } from "react";
import {
  SidebarContentContainer,
  SidebarContentTop,
  SidebarText,
  SidebarContentBottom,
  SidebarRelativeChange,
} from "../../../../../../../styles/Overview/Content/DataType/Graph.styled";
import Context from "../../../../../../../context/context";
import upPolygon from "../../../../../../../images/Sidebar/upPolygon.svg";

const LightUsage = () => {
  const context = useContext(Context);

  return (
    <SidebarContentContainer>
      <SidebarContentTop>
        <SidebarText>Light Usage</SidebarText>
        <SidebarRelativeChange>
          <img
            style={{ width: "15px", paddingRight: "5px" }}
            src={upPolygon}
            alt="up"
          />
          10.6% mo/mo
        </SidebarRelativeChange>
      </SidebarContentTop>
      <SidebarContentBottom>
        {
          context["userData"]["devices"][0]["metricAverages"]["lightUsage"][
            "currAvgMinPerMonth"
          ]
        }
        m
      </SidebarContentBottom>
    </SidebarContentContainer>
  );
};

export default LightUsage;
