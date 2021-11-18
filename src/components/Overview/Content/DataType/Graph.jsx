import React, { useState, useEffect } from "react";
import GraphContainer from "../../../../styles/Overview/Content/DataType/GraphContainer.styled";

//data
import { data1, data2, data3 } from "../../../Graph/lineData";
import { data4, data5, data6 } from "../../../Graph/heatData";
//components
import GraphButton from "../../../Graph/GraphButton/GraphButton";
import LineChart from "../../../Graph/LineChart";
import HeatMap from "../../../Graph/HeatMap";

const Graph = (props) => {
  const [graph, setGraph] = useState("line");
  const [graphData, setGraphData] = useState(data4)

  useEffect(() => {
    console.log(graph);
    console.log(graphData);
  }, [graph, graphData]);

  return (
    <>
    {/* <GraphButton setGraphData={setGraphData} setGraph={setGraph} data1={data1} data2={data2} data3={data3} /> */}
    <GraphButton setGraphData={setGraphData} setGraph={setGraph} data1={data4} data2={data5} data3={data6} />
    <div>
      {graph === "line" ? (
        <LineChart graphData={graphData} />
      ) : (
        <HeatMap graphData={graphData} />
      )}
    </div>
    </>
  );
};

export default Graph;
