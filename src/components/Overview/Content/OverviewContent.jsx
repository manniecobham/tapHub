import React from "react";
import { useTheme } from "styled-components";
import classes from "./OverviewContent.module.css";
import Card from "../../UI/Card.styled";
import CardData from "./CardData";

const OverviewContent = () => {
  const theme = useTheme();
  const bgColor = theme.colors.colorSecondaryWhite;

  return (
    <div className={`${classes.grid}`}>
      <Card
        backgroundColor={bgColor}
        className={`${classes.location} ${classes["grid--item"]}`}
      >
        <CardData type="LOCATION" />
      </Card>
      <Card
        backgroundColor={bgColor}
        className={`${classes.rooms} ${classes["grid--item"]} ${classes["grid--item_small"]}`}
      >
        <CardData type="ROOM" />
      </Card>
      <Card
        backgroundColor={bgColor}
        className={`${classes.co2} ${classes["grid--item"]} ${classes["grid--item_small"]}`}
      >
        <CardData type="CO2" />
      </Card>
      <Card
        backgroundColor={bgColor}
        className={`${classes.lightwaste} ${classes["grid--item"]} ${classes["grid--item_small"]}`}
      >
        <CardData type="LIGHT" />
      </Card>
      <Card
        backgroundColor={bgColor}
        className={`${classes.hcwaste} ${classes["grid--item"]} ${classes["grid--item_small"]}`}
      >
        <CardData type="HC" />
      </Card>
      <Card
        backgroundColor={bgColor}
        className={`${classes.graph} ${classes["grid--item"]}`}
      >
        <CardData type="GRAPH" />
      </Card>
    </div>
  );
};

export default OverviewContent;
