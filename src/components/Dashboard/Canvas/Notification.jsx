import React from "react";
import classes from "./Notification.module.css";
import notification from "../../../images/notification.png";

const Notification = () => {
  return (
    <img href={notification} alt="bell" className={`${classes.notification}`} />
  );
};

export default Notification;
