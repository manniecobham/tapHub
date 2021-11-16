import React from "react";
import { Link } from "react-router-dom";
import classes from "../../styles/Sidebar/SidebarItem.module.css";

const SidebarItem = (props) => {
  if (!props.path && !props.page) {
    return (
      <li>
        <div className={`${classes["sidebar--item"]}`}>
          <img src={props.icon} />
        </div>
      </li>
    );
  } else {
    return (
      <li>
        <Link to={props.path} className={`${classes["sidebar--item"]}`}>
          <img
            src={props.icon}
            alt={props.page}
            className={`${classes["sidebar--icon"]}`}
          />
          <p>{props.page}</p>
        </Link>
      </li>
    );
  }
};

export default SidebarItem;
