import React from "react";
import LineChart from "../../../Graph/LineChart";
import { data1, data2, data3 } from "../../../Graph/lineData";
import GraphContainer from "../../../../styles/Overview/Content/DataType/GraphContainer.styled";

const Graph = (props) => {
  return (
    <GraphContainer>
      <LineChart data1={data1} data2={data2} data3={data3} />
    </GraphContainer>
  );
};

export default Graph;
