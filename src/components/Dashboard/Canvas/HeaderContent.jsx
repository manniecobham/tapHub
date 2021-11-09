import React from "react";
import Notification from "./Notification";
import classes from "./HeaderContent.module.css";

const HeaderContent = () => {
  return (
    <div className={`${classes.header}`}>
      <div className={`${classes["header--item"]}`}>
        <h2>InstaHub Office</h2>
      </div>
      <div className={`${classes["header--item"]}`}>
        <h2>InstaHub Distribution Center</h2>
      </div>
      <div className={`${classes["header--item"]}`}>
        <input
          type="text"
          placeholder="Search ..."
          className={`${classes["search"]}`}
        ></input>
      </div>
      <div className={`${classes["header--item"]}`}>
        <img />
      </div>
      <div className={`${classes["header--item"]}`}>
        <Notification />
      </div>
    </div>
  );
};

export default HeaderContent;
