import React, { useState } from 'react'

// data
import { data4, data5, data6 } from "../../../Overview/Content/DataType/Graph/heatData";

// components
import Graph from '../AnalyticsGraphComponents/Graph';
import GraphButtons from '../AnalyticsGraphComponents/GraphButtons';

const AnalyticsCards = () => {
  const [graphData, setGraphData] = useState(data5);
  const [graphType, setGraphType] = useState("line");

  return (
    <div className="analysis">
      <div className="analysis__graph analytics-card">
        <div style={{display:"flex", justifyContent:"right", paddingTop:"10px"}}>
          <GraphButtons setGraphType={setGraphType} />
        </div>
        <div>
          <Graph graphData={graphData} graphType={graphType}/>
        </div>
      </div>
      <div className="analysis__performance analytics-card">
        Comparison goes here
      </div>
      <div className="analysis__dropdown analytics-card">
        Other dropdown goes here
      </div>
      <div className="analysis__floor analytics-card">
        Floor plan goes here
      </div>
    </div>
  )
}

export default AnalyticsCards
