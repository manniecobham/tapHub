import React, { useState } from 'react'

// data
import { data4, data5, data6 } from "../../Overview/Content/DataType/Graph/heatData";

// styles
import { Container } from './AnalyticsCards.styled'

// components
import Graph from './AnalyticsGraph/Graph';
import GraphButtons from './AnalyticsGraph/GraphButtons';

const AnalyticsCards = ({ graphData }) => {
  const [graphType, setGraphType] = useState("line");

  return (
    <Container className="analysis">
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
    </Container>
  )
}

export default AnalyticsCards
