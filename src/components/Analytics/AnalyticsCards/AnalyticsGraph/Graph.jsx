import React, { useState } from 'react'

// components
import HeatMap from './Heatmap';
import LineChart from './LineChart';

const Graph = ({ graphData, graphType }) => {

  const chart = graphType === 'line' ? (
    <LineChart graphData={graphData} />
  ) : (
    <HeatMap graphData={graphData} />
  );
  return (
    <div>
      {chart}
    </div>
  )
}

export default Graph
