import React, { useContext } from "react";
import {
  SidebarContentContainer,
  SidebarContentTop,
  SidebarText,
  SidebarContentBottom,
  SidebarRelativeChange,
} from "../GraphSidebar.styles";
import Context from "../../../../context/context";
import upPolygon from '../../../../images/Sidebar/upPolygon.svg'

const SpaceUtilization = () => {
  const context = useContext(Context);

  return (
    <SidebarContentContainer>
      <SidebarContentTop>
        <SidebarText>Space Utilization</SidebarText>
        <SidebarRelativeChange>
          <img style={{width: "15px", paddingRight: "5px"}} src={upPolygon} alt="up" />
          2.1% dd/dd
        </SidebarRelativeChange>
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
