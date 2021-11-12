import React from "react";
import { useTheme } from "styled-components";
import classes from "./OverviewContent.module.css";
import Card from "../../UI/Card";
import CardData from "./CardData";

const OverviewContent = () => {
  return (
    <div className={`${classes.grid}`}>
      <Card classes={`${classes.location} ${classes["grid--item"]}`}>
        <CardData type="LOCATION" />
      </Card>
      <Card
        classes={`${classes.rooms} ${classes["grid--item"]} ${classes["grid--item_small"]}`}
      >
        <CardData type="ROOM" />
      </Card>
      <Card
        classes={`${classes.co2} ${classes["grid--item"]} ${classes["grid--item_small"]}`}
      >
        <CardData type="CO2" />
      </Card>
      <Card
        classes={`${classes.lightwaste} ${classes["grid--item"]} ${classes["grid--item_small"]}`}
      >
        <CardData type="LIGHT" />
      </Card>
      <Card
        classes={`${classes.hcwaste} ${classes["grid--item"]} ${classes["grid--item_small"]}`}
      >
        <CardData type="HC" />
      </Card>
      <Card classes={`${classes.graph} ${classes["grid--item"]}`}>
        <CardData type="GRAPH" />
      </Card>
    </div>
  );
};

export default OverviewContent;
