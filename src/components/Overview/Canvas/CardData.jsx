import React from "react";
import classes from "./CardData.module.css";

const CardData = (props) => {
  return (
    <React.Fragment>
      <div className={`${classes["card--header"]}`}>
        <h2 className={`${classes["card--title"]}`}>{props.title}</h2>
        <div className={`${classes["card--toggle"]}`}>
          <button className={`${classes["toggle--container"]}`}>
            <img
              src={props.imageName1}
              alt={props.imageAlt1}
              className={`${classes["card--img1"]}`}
            />
          </button>
          <button className={`${classes["toggle--container"]}`}>
            <img
              src={props.imageName2}
              alt={props.imageAlt2}
              className={`${classes["card--img2"]}`}
            />
          </button>
        </div>
      </div>
      <p>{props.data}</p>
    </React.Fragment>
  );
};

export default CardData;
