import React from 'react'

//components
import HeatMap from '../AnalyticsGraphComponents/Heatmap'
import LineChart from '../AnalyticsGraphComponents/LineChart'


const Graph = ({ graphData, graphType }) => {

  const chart = graphType === "line" ? (
    <LineChart graphData={graphData} />
  ) : (
    <HeatMap graphData={graphData} />
  )

  return (
    <div>
      {chart}
    </div>
  )
}

export default Graph
