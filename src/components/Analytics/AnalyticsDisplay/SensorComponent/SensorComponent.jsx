import React, { useState } from 'react';

// images
import acIcon from '../../../../images/Analytics/acIcon.svg';
import humidityIcon from '../../../../images/Analytics/humidityIcon.svg';
import lightingIcon from '../../../../images/Analytics/lightingIcon.svg';
import airIcon from '../../../../images/Analytics/airIcon.svg';
import roomIcon from '../../../../images/Analytics/roomIcon.svg';

// components
import { Card } from '../../../../styles/UI/Card.styled';


const SensorComponent = ({ sensor, setGraphData, sensors, setActiveSensor, id}) => {
  const [isActive, setIsActive] = useState(false)
  var units;
  var icon;
  var description;

  if (sensor.title === "Space Utilization") {
    units = "%";
    description = "Room Average"
    icon = (
      <img
        src={roomIcon}
        alt="up"
      />
    );
  } else if (sensor.title === "Temperature") {
    units = <span>&deg;F</span>;
    description = "Room Average"
    icon = (
      <img
        src={acIcon}
        alt="up"
      />
    );
  } else if (sensor.title === "Light Usage") {
    units = "m";
    description = "Waste Percentage"
    icon = (
      <img
        src={lightingIcon}
        alt="up"
      />
    );
  } else if (sensor.title === "Humidity") {
    units = "%";
    description = "Room Average"
    icon = (
      <img
        src={humidityIcon}
        alt="up"
      />
    );
  } else if (sensor.title === "Pressure") {
    units = " hpa";
    description = "Room Average"
    icon = (
      <img
        src={airIcon}
        alt="up"
      />
    );
  }

    const onClickHandler = () => {
        if (id === 1) {
            setGraphData(sensors[0].graphData)
            // setActiveSensor(1)
        } else if (id === 2) {
            setGraphData(sensors[1].graphData)
            // setActiveSensor(2)
        } else if (id === 3) {
            setGraphData(sensors[2].graphData)
            // setActiveSensor(3)
        } else if (id === 4) {
            setGraphData(sensors[3].graphData)
            // setActiveSensor(4)
        } else if (id === 5) {
            setGraphData(sensors[4].graphData)
            // setActiveSensor(5)
        }
    }

  return (
    <Card className="card sensors-box" onClick={onClickHandler} >
      <div className="sensors-box-info">
        <div className="img-container">
          {icon}
        </div>
        <div className="info-container">
          <span className="word">{sensor.tabData.value1}{units}</span>
          <span className="word">{sensor.title}</span>
          <span className="room-average">{description}</span>
        </div>                    
      </div>
      <div className="graybox" ></div>
    </Card>
  )
}

export default SensorComponent
