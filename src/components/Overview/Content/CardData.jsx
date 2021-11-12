import React from "react";
import classes from "./CardData.module.css";
import Location from "./DataType/Location";
import RoomsOccupied from "./DataType/RoomsOccupied";
import CO2Reduction from "./DataType/CO2Reduction";
import LightWasted from "./DataType/LightWasted";
import HCWasted from "./DataType/HCWasted";
import Graph from "./DataType/Graph";
import Error from "../../Error/Error";

const CardData = (props) => {
  let CardDataType = <Error />;
  if (props.type === "LOCATION") {
    CardDataType = <Location />;
  } else if (props.type === "ROOM") {
    CardDataType = <RoomsOccupied />;
  } else if (props.type === "CO2") {
    CardDataType = <CO2Reduction />;
  } else if (props.type === "LIGHT") {
    CardDataType = <LightWasted />;
  } else if (props.type === "HC") {
    CardDataType = <HCWasted />;
  } else if (props.type === "GRAPH") {
    CardDataType = <Graph />;
  }

  return CardDataType;
};

export default CardData;
