import React from 'react'

// styles
import { Container } from './SensorComponent.styled'

// components
import Humidity from './Sensors/Humidity'
import LightUsage from './Sensors/LightUsage'
import Pressure from './Sensors/Pressure'
import SpaceUtilization from './Sensors/SpaceUtilization'
import Temperature from './Sensors/Temperature'

const SensorComponent = ({ sensors, setGraphData }) => {

  return (
    <Container className="sensors">
      <SpaceUtilization sensor={sensors[0]} setGraphData={setGraphData} />
      <Temperature sensor={sensors[1]} setGraphData={setGraphData} />
      <LightUsage sensor={sensors[2]} setGraphData={setGraphData} />
      <Humidity sensor={sensors[3]} setGraphData={setGraphData} />
      <Pressure sensor={sensors[4]} setGraphData={setGraphData} />
    </Container>
  )
}

export default SensorComponent
