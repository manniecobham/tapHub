import React from "react";
import classes from "./RoomsOccupied.module.css";
import lightningIcon from "../../../../images/card_data/lightning.png";
import dollarIcon from "../../../../images/card_data/dollar.png";

const RoomsOccupied = (props) => {
  return (
    <React.Fragment>
      <div className={`${classes["card--header"]}`}>
        <h2 className={`${classes["card--title"]}`}>Rooms Occupied</h2>
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
      <p>29</p>
    </React.Fragment>
  );
};

export default RoomsOccupied;
