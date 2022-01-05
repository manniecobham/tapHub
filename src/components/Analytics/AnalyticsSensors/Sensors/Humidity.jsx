import React from 'react';

// images
import humidityIcon from '../../../../images/Analytics/humidityIcon.svg';

const Humidity = ({ sensor, setGraphData }) => {

  const onClickHandler = () => {
    setGraphData(sensor.graphData)
  }

  return (
    <div className="sensors-box" onClick={onClickHandler}>
      <div className="sensors-box-info">
        <div className="img-container">
          <img src={humidityIcon} alt="" />
        </div>
        <div className="info-container">
          <span className="text">{sensor.tabData.value1}%</span>
          <span className="text">{sensor.title}</span>
          <span className="room-average">{sensor.description}</span>
        </div>                    
      </div>
      <div className="graybox" ></div>    
    </div>
  )
}

export default Humidity
