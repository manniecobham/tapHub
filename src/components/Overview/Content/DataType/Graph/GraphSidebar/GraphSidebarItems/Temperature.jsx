import React, { useContext } from "react";
import {
  SidebarContentContainer,
} from "../../../../../../../styles/Overview/Content/DataType/Graph/GraphSidebar/GraphSider.styled";
import Context from "../../../../../../../context/context";
import downPolygon from "../../../../../../../images/Sidebar/downPolygon.svg";

const Temperature = (props) => {
  const context = useContext(Context);

  return (
    <SidebarContentContainer className={`${props.className}`}>
      <div className="sidebar-content__top">
        <h3>Temperature</h3>
        <div>
          <img
            style={{ width: "15px", paddingRight: "5px" }}
            src={downPolygon}
            alt="up"
          />
          11.1% dd/dd
        </div>
      </div>
      <div className="sidebar-content__bottom">
        {
          context["userData"]["devices"][0]["metricAverages"]["temperature"][
            "currAvgTemp"
          ]
        }
        &deg;F
      </div>
    </SidebarContentContainer>
  );
};

export default Temperature;
