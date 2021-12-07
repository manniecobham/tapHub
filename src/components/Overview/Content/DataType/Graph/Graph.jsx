import React, { useState } from "react";
import { useTheme } from "styled-components";

// data
import { data1, data2, data3 } from "./lineData";
import { data4, data5, data6 } from "./heatData";

// styles
import {
  GraphCard,
} from "../../../../../styles/Overview/Content/DataType/Graph/Graph.styled";

// components
import GraphSidebar from "./GraphSidebar/GraphSidebar";
import LineChart from "./LineChart";
import HeatMap from "./Heatmap";
import GraphButton from "./GraphButton/GraphButton";

const Graph = (props) => {
  const theme = useTheme();
  const bgColor = theme.colors.colorSecondaryWhite;
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
    <GraphCard backgroundColor={bgColor} className={`graph ${props.classes}`}>
      <GraphSidebar />
      <div className="graph__container">
        <GraphButton
          setGraphData={onDateChange}
          setGraphType={onGraphTypeChange}
          data1={data4}
          data2={data5}
          data3={data6}
        />
        {Chart}
      </div>
    </GraphCard>
  );
};

export default Graph;
