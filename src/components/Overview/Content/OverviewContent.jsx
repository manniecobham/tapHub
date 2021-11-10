import React from "react";
import classes from "./OverviewContent.module.css";
import instahubImage from "../../../images/dummy_data/instahub-office.png";
import Card from "../../UI/Card";
import CardData from "./CardData";

const OverviewContent = () => {
  return (
    <div className={`${classes.grid}`}>
      <Card className={`${classes.location} ${classes["grid--item"]}`}>
        <CardData type="LOCATION" />
      </Card>
      <Card
        className={`${classes.rooms} ${classes["grid--item"]} ${classes["grid--item_small"]}`}
      >
        <CardData type="ROOM" />
      </Card>
      <Card
        className={`${classes.co2} ${classes["grid--item"]} ${classes["grid--item_small"]}`}
      >
        <CardData type="CO2" />
      </Card>
      <Card
        className={`${classes.lightwaste} ${classes["grid--item"]} ${classes["grid--item_small"]}`}
      >
        <CardData type="LIGHT" />
      </Card>
      <Card
        className={`${classes.hcwaste} ${classes["grid--item"]} ${classes["grid--item_small"]}`}
      >
        <CardData type="HC" />
      </Card>
      <Card className={`${classes.graph} ${classes["grid--item"]}`}>
        <CardData type="GRAPH" />
      </Card>
    </div>
  );
};

export default OverviewContent;
