import React from "react";
import instahubImage from "../../../../../images/Overview/instahub-office.png";
import imageIcon from "../../../../../images/Overview/imageIcon.svg";
import mapIcon from "../../../../../images/Overview/mapIcon.svg";
import ToggleGroup from "../../../../UI/ToggleGroup";
import {
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

  return (
    <React.Fragment>
      <CardHeader>
        <CardTitle titleSize={titleSize}>InstaHub Office</CardTitle>
        <div style={{ display: "flex" }}>
          <ToggleGroup
            src1={imageIcon}
            alt1="image"
            src2={mapIcon}
            alt2="map"
          />
          <State stateAbbr={"PA"} />
        </div>
      </CardHeader>
      <CardContent>
        <img src={instahubImage} alt="location" className="width:100%;" />
      </CardContent>
    </React.Fragment>
  );
};

export default Location;
