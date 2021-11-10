import React from "react";
import classes from "./Location.module.css";
import instahubImage from "../../../../images/dummy_data/instahub-office.png";
import lightningIcon from "../../../../images/card_data/lightning.png";
import dollarIcon from "../../../../images/card_data/dollar.png";

const Location = (props) => {
  return (
    <React.Fragment>
      <div className={`${classes["card--header"]}`}>
        <h2 className={`${classes["card--title"]}`}>InstaHub Office</h2>
        <div className={`${classes["card--toggle"]}`}>
          <button className={`${classes["toggle--container"]}`}>
            <img
              src={lightningIcon}
              alt="lightning"
              className={`${classes["card--img1"]}`}
            />
          </button>
          <button className={`${classes["toggle--container"]}`}>
            <img
              src={dollarIcon}
              alt="dollar"
              className={`${classes["card--img2"]}`}
            />
          </button>
        </div>
      </div>
      <img
        src={instahubImage}
        alt="location"
        className={`${classes["location--image"]}`}
      />
    </React.Fragment>
  );
};

export default Location;
