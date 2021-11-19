import React, { useState} from "react";
import GraphContainer from "../../../../styles/Overview/Content/DataType/GraphContainer.styled";

//data
import { data1, data2, data3 } from "../../../Graph/lineData";
import { data4, data5, data6 } from "../../../Graph/heatData";
//components
import GraphButton from "../../../Graph/GraphButton/GraphButton";
import LineChart from "../../../Graph/LineChart";
import HeatMap from "../../../Graph/Heatmap";
import GraphSidebar from "../../../Graph/GraphSidebar";

const Graph = (props) => {
  //const [graphType, setGraphType] = useState("line");
  const [graphData, setGraphData] = useState(data4);
  const [isLineChartShown, setIsLineChartShown] = useState(true);

  const onDateChange = (newGraph) => {
    setGraphData(newGraph);
  };

  const onGraphTypeChange = (newGraphType) => {
    setIsLineChartShown(newGraphType);
  };

  const Chart = isLineChartShown ? (
    <LineChart graphData={graphData} />
  ) : (
    <HeatMap graphData={graphData} />
  );

  return (
    <>
    <GraphSidebar />
    <GraphContainer>
      <GraphButton
        setGraphData={onDateChange}
        setGraphType={onGraphTypeChange}
        data1={data4}
        data2={data5}
        data3={data6}
      />
      {Chart}
    </GraphContainer>
    </>
  );
};

export default Graph;
