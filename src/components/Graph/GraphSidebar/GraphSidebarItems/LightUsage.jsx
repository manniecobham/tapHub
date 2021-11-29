import React, { useContext } from "react";
import {
  SidebarContentContainer,
  SidebarContentTop,
  SidebarText,
  SidebarContentBottom,
  SidebarRelativeChange,
} from "../GraphSidebar.styles";
import Context from "../../../../context/context";

const LightUsage = () => {
  const context = useContext(Context);

  return (
    <SidebarContentContainer>
      <SidebarContentTop>
        <SidebarText>Light Usage</SidebarText>
        <SidebarRelativeChange>10.6% mo/mo</SidebarRelativeChange>
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
