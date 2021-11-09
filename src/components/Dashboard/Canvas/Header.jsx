import React from "react";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <div className={`${classes.header}`}>
      <div className={`${classes["header--item"]}`}>
        <h2>InstaHub Office</h2>
      </div>
      <div className={`${classes["header--item"]}`}>
        <h2>InstaHub Distribution Center</h2>
      </div>
      <div className={`${classes["header--item"]}`}>
        <input type="text" placeholder="Search ..."></input>
      </div>
      <div className={`${classes["header--item"]}`}>
        <img />
      </div>
      <div className={`${classes["header--item"]}`}>
        <img />
      </div>
    </div>
  );
};

export default Header;
