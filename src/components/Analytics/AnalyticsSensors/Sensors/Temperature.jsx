import React from 'react';

// images
import acIcon from '../../../../images/Analytics/acIcon.svg';

const Temperature = ({ sensor, setGraphData }) => {

  const onClickHandler = () => {
    setGraphData(sensor.graphData)
  }

  return (
    <div className="sensors-box" onClick={onClickHandler}>
      <div className="sensors-box-info">
        <div className="img-container">
          <img src={acIcon} alt="" />
        </div>
        <div className="info-container">
          <span className="text">{sensor.tabData.value1}&deg;F</span>
          <span className="text">{sensor.title}</span>
          <span className="room-average">{sensor.description}</span>
        </div>                    
      </div>
      <div className="graybox" ></div>    
    </div>
  )
}

export default Temperature
