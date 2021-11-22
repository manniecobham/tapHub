import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
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
        <NavLink
          to={props.path}
          className="sidebar--item"
          activeClassName="active"
        >
          <img src={props.icon} alt={props.page} className={`sidebar--icon`} />
          <p>{props.page}</p>
        </NavLink>
      </SidebarListItem>
    );
  }
};

export default SidebarItem;

//           className={(isActive) => `sidebar--item ${isActive ? "active" : ""}`}
