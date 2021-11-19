import React, { useState, useEffect } from "react";
import GraphContainer from "../../../../styles/Overview/Content/DataType/GraphContainer.styled";

//data
import { data1, data2, data3 } from "../../../Graph/lineData";
import { data4, data5, data6 } from "../../../Graph/heatData";
//components
import GraphButton from "../../../Graph/GraphButton/GraphButton";
import LineChart from "../../../Graph/LineChart";
import HeatMap from "../../../Graph/Heatmap";
import { Card } from "../../../../styles/UI/Card.styled";
import { useTheme } from "styled-components";

const Graph = (props) => {
  const theme = useTheme();
  const bgColor = theme.colors.colorSecondaryWhite;
  //const [graphType, setGraphType] = useState("line");
  const [graphData, setGraphData] = useState(data4);
  const [isLineChartShown, setIsLineChartShown] = useState(true);

  const onDateChange = (newGraph) => {
    setGraphData(newGraph);
  };

  const onGraphTypeChange = (newGraphType) => {
    setIsLineChartShown(newGraphType);
  };

  // useEffect(() => {
  //   console.log(graphType);
  //   console.log(graphData);
  // }, [graphType, graphData]);

  const Chart = isLineChartShown ? (
    <LineChart graphData={graphData} />
  ) : (
    <HeatMap graphData={graphData} />
  );

  return (
    <Card backgroundColor={bgColor} className={`${props.classes}`}>
      <GraphContainer>
        {/* <GraphButton setGraphData={setGraphData} setGraph={setGraph} data1={data1} data2={data2} data3={data3} /> */}
        <GraphButton
          setGraphData={onDateChange}
          setGraphType={onGraphTypeChange}
          data1={data4}
          data2={data5}
          data3={data6}
        />
        {Chart}
      </GraphContainer>
    </Card>
  );
};

export default Graph;
