import React, { useState, useRef, useContext } from "react";
import { useTheme } from "styled-components";
import { SideNav } from "../../styles/Sidebar/Sidebar.styled";
import SidebarItem from "./SidebarItem";
import { NavLink } from "react-router-dom";
import Context from "../../context/context";
import IH_icon from "../../images/Sidebar/instahubIcon.png";
import overview_icon from "../../images/Sidebar/overview.svg";
import arrow_icon from "../../images/Sidebar/arrow.svg";
import sep_line from "../../images/Sidebar/line.svg";
import analytics_icon from "../../images/Sidebar/analytics.svg";
import reports_icon from "../../images/Sidebar/reports.svg";
import sensors_icon from "../../images/Sidebar/sensors.svg";
import property_icon from "../../images/Sidebar/property.svg";
import { nav } from "@aws-amplify/ui";

const Sidebar = (props) => {
  const theme = useTheme();
  const context = useContext(Context);
  const bgColor = theme.colors.colorPrimaryDarkBlue;
  const textColor = theme.colors.colorSecondaryWhite;

  const [isOpen, setIsOpen] = useState(true);

  const navExpandRef = useRef();
  const navRef = useRef();
  const navListItemRefs = useRef(new Array());

  const onCollapse = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <SideNav id={props.id} className={isOpen ? "nav" : "nav nav--closed"}>
      <img
        className="nav__expand"
        src={arrow_icon}
        alt="arrow"
        onClick={onCollapse}
      />
      <ul className="nav__list">
        <li className="nav__list-item">
          <a target="_blank" href="https://www.getinstahub.com/">
            <img src={IH_icon} alt="home" />
          </a>
        </li>
        <li className="nav__list-item nav__list-item--disabled">
          <img id="line" src={sep_line} alt="line" />
        </li>
        <li className="nav__list-item">
          <NavLink
            to="/overview"
            className={({ isActive }) =>
              isActive ? "nav__list-item-link--active" : ""
            }
          >
            <img src={overview_icon} alt="overview" />
            <p>Overview</p>
          </NavLink>
        </li>
        <li className="nav__list-item">
          <NavLink
            to="/analytics"
            className={({ isActive }) =>
              isActive ? "nav__list-item-link--active" : ""
            }
          >
            <img src={analytics_icon} alt="analytics" />
            <p>Analytics</p>
          </NavLink>
        </li>
        <li className="nav__list-item">
          <NavLink
            to="/reports"
            className={({ isActive }) =>
              isActive ? "nav__list-item-link--active" : ""
            }
          >
            {" "}
            <img src={reports_icon} alt="reports" />
            <p>Reports</p>
          </NavLink>
        </li>
        <li className="nav__list-item">
          <NavLink
            to="/sensors"
            className={({ isActive }) =>
              isActive ? "nav__list-item-link--active" : ""
            }
          >
            {" "}
            <img src={sensors_icon} alt="sensors" />
            <p>Sensors</p>
          </NavLink>
        </li>
        <li className="nav__list-item">
          <NavLink
            to="/property"
            className={({ isActive }) =>
              isActive ? "nav__list-item-link--active" : ""
            }
          >
            {" "}
            <img src={property_icon} alt="property" />
            <p>Property</p>
          </NavLink>
        </li>
      </ul>
    </SideNav>
  );
};

export default Sidebar;

// old navbar
// <nav className="nav">
//   <StyledSidebar backgroundColor={bgColor} textColor={textColor}>
//     <li>
//       <a target="_blank" href="https://www.getinstahub.com/">
//         <img src={IH_icon} alt="home" style={{ width: "30px" }} />
//       </a>
//     </li>
//     <SidebarItem icon={sep_line} />
//     <SidebarItem path="/overview" page="overview" icon={overview_icon} />
//     <SidebarItem path="/analytics" page="analytics" icon={analytics_icon} />
//     <SidebarItem path="/reports" page="reports" icon={reports_icon} />
//     <SidebarItem path="/sensors" page="sensors" icon={sensors_icon} />
//     <SidebarItem path="/property" page="property" icon={property_icon} />
//   </StyledSidebar>
// </nav>
