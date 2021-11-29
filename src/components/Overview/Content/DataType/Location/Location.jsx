import React, { useState, useContext } from "react";
import instahubImage from "../../../../../images/Overview/instahub-office.png";
import instaHubBuilding from "../../../../../images/Overview/instahubBuilding.png";
import imageIcon from "../../../../../images/Overview/imageIcon.svg";
import mapIcon from "../../../../../images/Overview/mapIcon.svg";
import {
  ToggleGroup,
  ToggleButton,
} from "../../../../../styles/UI/Toggle.styled";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "../../../../../styles/UI/Card.styled";
import State from "./State";
import { useTheme } from "styled-components";

// CONVERT THE DIV INSIDE CARDHEADER INTO COMPONENT

const Location = (props) => {
  const theme = useTheme();
  const titleSize = theme.typography.headerSize;
  const bgColor = theme.colors.colorSecondaryWhite;
  const [firstIconIsActive, setFirstIconIsActive] = useState(true);
  const [secondIconIsActive, setSecondIsActive] = useState(false);

  const onClickFirst = () => {
    setFirstIconIsActive(true);
    setSecondIsActive(false);
  };

  const onClickSecond = () => {
    setSecondIsActive(true);
    setFirstIconIsActive(false);
  };

  return (
    <Card
      backgroundColor={
        firstIconIsActive && !secondIconIsActive
          ? bgColor
          : theme.colors.colorPrimaryNeutralBlue
      }
      className={`${props.classes}`}
    >
      <CardHeader>
        <CardTitle titleSize={titleSize}>InstaHub Office</CardTitle>
        <div style={{ display: "flex" }}>
          <ToggleGroup>
            <ToggleButton
              className={firstIconIsActive ? "active" : null}
              onClick={onClickFirst}
            >
              <img
                src={imageIcon}
                alt="image"
                className={firstIconIsActive ? "filterBlack" : "filterGray"}
              />
            </ToggleButton>
            <ToggleButton
              className={secondIconIsActive ? "active" : null}
              onClick={onClickSecond}
            >
              <img
                src={mapIcon}
                alt="map"
                className={secondIconIsActive ? "filterBlack" : "filterGray"}
              />
            </ToggleButton>
          </ToggleGroup>
          <State stateAbbr={"PA"} />
        </div>
      </CardHeader>
      <CardContent>
        {firstIconIsActive && (
          <img src={instaHubBuilding} alt="location" className="img" />
        )}
        {secondIconIsActive && (
          <img src={instahubImage} alt="location" className="img" />
        )}
      </CardContent>
    </Card>
  );
};

export default Location;
