import React from 'react';

// images
import roomIcon from '../../../../images/Analytics/roomIcon.svg';

const SpaceUtilization = ({ sensor, setGraphData }) => {

  const onClickHandler = () => {
    setGraphData(sensor.graphData)
    console.log(sensor.graphData)
  }

  return (
    <div className="sensors-box" onClick={onClickHandler}>
      <div className="sensors-box-info">
        <div className="img-container">
          <img src={roomIcon} alt="" />
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

export default SpaceUtilization
