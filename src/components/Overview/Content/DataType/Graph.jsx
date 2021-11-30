import React, { useState } from "react";
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
import GraphSidebar from "../../../Graph/GraphSidebar/GraphSidebar";

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
    <>
    <Card style={{padding: "0", flexDirection: "row", justifyContent: "flex-start"}} backgroundColor={bgColor} className={`${props.classes}`}>
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
    </Card>
    </>
  );
};

export default Graph;
