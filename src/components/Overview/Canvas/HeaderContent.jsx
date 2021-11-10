import React from "react";
import classes from "./HeaderContent.module.css";
import Notification from "./Notification";
import Profile from "./Profile";

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
        <Notification />
      </div>
      <div className={`${classes["header--item"]}`}>
        <Profile />
      </div>
    </div>
  );
};

export default HeaderContent;
