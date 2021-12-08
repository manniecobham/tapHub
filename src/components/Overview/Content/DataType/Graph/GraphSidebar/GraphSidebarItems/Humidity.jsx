import React, { useContext } from "react";
import {
  SidebarContentContainer,
} from "../../../../../../../styles/Overview/Content/DataType/Graph/GraphSidebar/GraphSider.styled";
import Context from "../../../../../../../context/context";

const Humidity = (props) => {
  const context = useContext(Context);

  return (
    <SidebarContentContainer className={`${props.className}`}>
      <div className="sidebar-content__top">
        <h3>Humidity</h3>
        <div>Comfort</div>
      </div>
      <div className="sidebar-content__bottom">
        {
          context["userData"]["devices"][0]["metricAverages"]["humidity"][
            "currAvg"
          ]
        }
        %
      </div>
    </SidebarContentContainer>
  );
};

export default Humidity;
