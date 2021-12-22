import React from 'react'

const SensorComponent = () => {
  return (
    <div className="sensors">
      {sensors.map((sensor, id) => (
        <SensorComponent 
          setActiveSensor={setActiveSensor} 
          // active={active} 
          sensor={sensor} 
          setGraphData={setGraphData} 
          sensors={sensors} 
          key={id} 
            id={id} 
        />
      ))}
    </div>
  )
}

export default SensorComponent
