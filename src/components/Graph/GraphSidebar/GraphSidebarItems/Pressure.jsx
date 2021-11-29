import React, { useContext } from "react";
import {
  SidebarContentContainer,
  SidebarContentTop,
  SidebarText,
  SidebarContentBottom,
  SidebarRelativeChange,
} from "../GraphSidebar.styles";
import Context from "../../../../context/context";

const Pressure = () => {
  const context = useContext(Context);

  return (
    <SidebarContentContainer>
      <SidebarContentTop>
        <SidebarText>Pressure</SidebarText>
        <SidebarRelativeChange>Normal</SidebarRelativeChange>
      </SidebarContentTop>
      <SidebarContentBottom>
        {context["userData"]["devices"][0]["metricAverages"]["currAvg"]}kPa
      </SidebarContentBottom>
    </SidebarContentContainer>
  );
};

export default Pressure;
