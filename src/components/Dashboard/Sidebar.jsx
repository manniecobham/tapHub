import React from "react";
import classes from "./Sidebar.module.css";
import IH_icon from "../../instahubIcon.png";

function Sidebar() {
  return (
    <div className={classes.sidebar}>
      <div className={classes["sidebar--item"]}>
        <div classes={`${classes.icon} main`}></div>
        <p>InstaHub</p>
      </div>
      <div className={classes["sidebar--item"]}>
        <div classes={`${classes.icon} overview`}></div>
        <p>Overview</p>
      </div>
      <div className={classes["sidebar--item"]}>
        <div classes={`${classes.icon} overview`}></div>
        <p>Analytics</p>
      </div>
    </div>
  );
}

export default Sidebar;
