import React from "react";
import classes from "../../../../styles/Overview/Header/ProfileItem.module.css";

const ProfileItem = (props) => {
  return (
    <button className={classes["profile_item"]}>
      <img src={props.icon} className={classes["profile_image"]} />
      <p>{props.title}</p>
    </button>
  );
};

export default ProfileItem;
