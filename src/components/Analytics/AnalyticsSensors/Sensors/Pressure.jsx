import React from 'react';

// images
import airIcon from '../../../../images/Analytics/airIcon.svg';

const Pressure = ({ sensor, setGraphData }) => {

  const onClickHandler = () => {
    setGraphData(sensor.graphData)
    console.log("Clicked pressure")
  }

  return (
    <div className="sensors-box" onClick={onClickHandler}>
      <div className="sensors-box-info">
        <div className="img-container">
          <img src={airIcon} alt="" />
        </div>
        <div className="info-container">
          <span className="text">{sensor.tabData.value1} hpa</span>
          <span className="text">{sensor.title}</span>
          <span className="room-average">{sensor.description}</span>
        </div>                    
      </div>
      <div className="graybox" ></div>    
    </div>
  )
}

export default Pressure
