import React from "react";
import { Link } from "react-router-dom";
import { SidebarListItem } from "../../styles/Sidebar/Sidebar.styled";

const SidebarItem = (props) => {
  if (!props.path && !props.page) {
    return (
      <SidebarListItem>
        <div className="sidebar--item">
          <img src={props.icon} />
        </div>
      </SidebarListItem>
    );
  } else {
    return (
      <SidebarListItem>
        <Link to={props.path} className="sidebar--item">
          <img src={props.icon} alt={props.page} className="sidebar--icon" />
          <p>{props.page}</p>
        </Link>
      </SidebarListItem>
    );
  }
};

export default SidebarItem;
