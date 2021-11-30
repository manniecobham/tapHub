import React, { useContext } from "react";
import {
  SidebarContentContainer,
  SidebarContentTop,
  SidebarText,
  SidebarContentBottom,
  SidebarRelativeChange,
} from "../GraphSidebar.styles";
import Context from "../../../../context/context";
import downPolygon from '../../../../images/Sidebar/downPolygon.svg'

const Temperature = () => {
  const context = useContext(Context);

  return (
    <SidebarContentContainer>
      <SidebarContentTop>
        <SidebarText>Temperature</SidebarText>
        <SidebarRelativeChange>
          <img style={{width: "15px", paddingRight: "5px"}} src={downPolygon} alt="up" />
          11.1% dd/dd
        </SidebarRelativeChange>
      </SidebarContentTop>
      <SidebarContentBottom>
        {
          context["userData"]["devices"][0]["metricAverages"]["temperature"][
            "currAvgTemp"
          ]
        }
        &deg;F
      </SidebarContentBottom>
    </SidebarContentContainer>
  );
};

export default Temperature;
