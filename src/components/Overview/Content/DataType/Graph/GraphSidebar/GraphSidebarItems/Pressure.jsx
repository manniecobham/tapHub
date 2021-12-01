import React, { useContext } from "react";
import {
  SidebarContentContainer,
  SidebarContentTop,
  SidebarText,
  SidebarContentBottom,
  SidebarRelativeChange,
} from "../../../../../../../styles/Overview/Content/DataType/Graph.styled";
import Context from "../../../../../../../context/context";

const Pressure = () => {
  const context = useContext(Context);

  return (
    <SidebarContentContainer>
      <SidebarContentTop>
        <SidebarText>Pressure</SidebarText>
        <SidebarRelativeChange>Normal</SidebarRelativeChange>
      </SidebarContentTop>
      <SidebarContentBottom>
        {
          context["userData"]["devices"][0]["metricAverages"]["pressure"][
            "currAvg"
          ]
        }
        kPa
      </SidebarContentBottom>
    </SidebarContentContainer>
  );
};

export default Pressure;
