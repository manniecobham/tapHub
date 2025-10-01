import React, { useState } from "react";
import { NavbarStyled } from "../../styles/Navbar/Navbar.styled";
import { NavLink } from "react-router-dom";
import Container from "../../styles/UI/Container.styled";
import IH_icon from "../../images/Sidebar/TabHubIcon.png";
import overview_icon from "../../images/Sidebar/overview.svg";
import analytics_icon from "../../images/Sidebar/analytics.svg";
import reports_icon from "../../images/Sidebar/reports.svg";
import sensors_icon from "../../images/Sidebar/sensors.svg";
import property_icon from "../../images/Sidebar/property.svg";
import Notification from "./Notifications/Notification";
import Profile from "./Profile/Profile";

const Navbar = (props) => {
  const [hamburgerIsOpen, setHamburgerIsOpen] = useState(false);

  const openHamburger = () => {
    setHamburgerIsOpen((prev) => !prev);
  };

  return (
    <NavbarStyled className={`${hamburgerIsOpen ? "header--full" : ""}`}>
      <Container className="container__nav">
        <button
          className={`hamburger ${hamburgerIsOpen ? "hamburger--open" : ""}`}
          onClick={openHamburger}
        >
          <div className="line-one"></div>
          <div className="line-two"></div>
          <div className="line-three"></div>
        </button>
        <nav className={hamburgerIsOpen ? "nav nav--open" : "nav"}>
          <ul className="nav__list">
            <li className="nav__list-item">
              <a
                className="logo"
                target="_blank"
                rel="noreferrer"
                href="https://www.getTabHub.com/"
              >
                <img className="logo__image" src={IH_icon} alt="home" />
              </a>
            </li>
            <li className="nav__list-item">
              <NavLink
                to="/overview"
                className={({ isActive }) =>
                  isActive ? "nav__link--active" : ""
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
                  isActive ? "nav__link--active" : ""
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
                  isActive ? "nav__link--active" : ""
                }
              >
                <img src={reports_icon} alt="reports" />
                <p>Reports</p>
              </NavLink>
            </li>
            <li className="nav__list-item">
              <NavLink
                to="/sensors"
                className={({ isActive }) =>
                  isActive ? "nav__link--active" : ""
                }
              >
                <img src={sensors_icon} alt="sensors" />
                <p>Sensors</p>
              </NavLink>
            </li>
            <li className="nav__list-item">
              <NavLink
                to="/property"
                className={({ isActive }) =>
                  isActive ? "nav__link--active" : ""
                }
              >
                <img src={property_icon} alt="property" />
                <p>Property</p>
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className="extra-logo">
          <a
            className="logo"
            target="_blank"
            rel="noreferrer"
            href="https://www.getTabHub.com/"
          >
            <img className="logo__image" src={IH_icon} alt="home" />
          </a>
        </div>
        <div className="actions">
          <Notification id="for-notifications" />
          <Profile />
        </div>
      </Container>
    </NavbarStyled>
  );
};

export default Navbar;
