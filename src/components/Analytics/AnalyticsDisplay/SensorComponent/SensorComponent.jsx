import React from 'react';

// images
import acIcon from '../../../../images/Analytics/acIcon.svg';
import humidityIcon from '../../../../images/Analytics/humidityIcon.svg';
import lightingIcon from '../../../../images/Analytics/lightingIcon.svg';
import airIcon from '../../../../images/Analytics/airIcon.svg';
import roomIcon from '../../../../images/Analytics/roomIcon.svg';

// components
import { Card } from '../../../../styles/UI/Card.styled';


const SensorComponent = ({ sensor }) => {
  
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

  return (
    <Card className="card sensors-box">
      <div className="sensors-box-info">
        <div className="img-container">
          {icon}
        </div>
        <div className="info-container">
          <span className="word">{sensor.data.value1}{units}</span>
          <span className="word">{sensor.title}</span>
          <span className="room-average">{description}</span>
        </div>                    
      </div>
      <div className="graybox"></div>
    </Card>
  )
}

export default SensorComponent
