import React from "react";
import classes from "./Notification.module.css";
import notification from "../../../images/notification.png";

const Notification = () => {
  return (
    <img src={notification} alt="bell" className={`${classes.notification}`} />
  );
};

export default Notification;
