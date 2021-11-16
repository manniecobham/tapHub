import React from "react";
import classes from "../../../../styles/Overview/Header/ProfileItem.module.css";

const ProfileItem = (props) => {
  return (
    <li className={classes["profile_item"]}>
      <button>
        <img src={props.icon} className={classes["profile_image"]} />
        <p>{props.title}</p>
      </button>
    </li>
  );
};

export default ProfileItem;
