import React from 'react';

// images
import lightingIcon from '../../../../images/Analytics/lightingIcon.svg';

const LightUsage = ({ sensor, setGraphData }) => {

  const onClickHandler = () => {
    setGraphData(sensor.graphData)
  }

  return (
    <div className="sensors-box" onClick={onClickHandler}>
      <div className="sensors-box-info">
        <div className="img-container">
          <img src={lightingIcon} alt="" />
        </div>
        <div className="info-container">
          <span className="text">{sensor.tabData.value1}m</span>
          <span className="text">{sensor.title}</span>
          <span className="room-average">{sensor.description}</span>
        </div>                    
      </div>
      <div className="graybox" ></div>    
    </div>
  )
}

export default LightUsage
