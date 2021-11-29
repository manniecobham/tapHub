import React, { useContext } from "react";
import {
  SidebarContentContainer,
  SidebarContentTop,
  SidebarText,
  SidebarContentBottom,
  SidebarRelativeChange,
} from "../GraphSidebar.styles";
import Context from "../../../../context/context";

const SpaceUtilization = () => {
  const context = useContext(Context);

  return (
    <SidebarContentContainer>
      <SidebarContentTop>
        <SidebarText>Space Utilization</SidebarText>
        <SidebarRelativeChange>2.1% dd/dd</SidebarRelativeChange>
      </SidebarContentTop>
      <SidebarContentBottom>
        {
          context["userData"]["devices"][0]["metricAverages"][
            "spaceUtilization"
          ]["currPercentOccupied"]
        }
        %
      </SidebarContentBottom>
    </SidebarContentContainer>
  );
};

export default SpaceUtilization;
