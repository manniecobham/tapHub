import React, { useContext } from "react";
import {
  SidebarContentContainer,
} from "../../../../../../../styles/Overview/Content/DataType/Graph/GraphSidebar/GraphSider.styled";
import Context from "../../../../../../../context/context";

const Pressure = (props) => {
  const context = useContext(Context);

  return (
    <SidebarContentContainer className={`${props.className}`}>
      <div className="sidebar-content__top">
        <h3>Pressure</h3>
        <div>Normal</div>
      </div>
      <div className="sidebar-content__bottom">
        {
          context["userData"]["devices"][0]["metricAverages"]["pressure"][
            "currAvg"
          ]
        }
        kPa
      </div>
    </SidebarContentContainer>
  );
};

export default Pressure;
