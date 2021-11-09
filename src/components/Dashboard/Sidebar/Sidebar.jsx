import React from "react";
import classes from "./Sidebar.module.css";
import IH_icon from "../../../instahubIcon.png";
import overview_icon from "../../../images/overview.png";
import sep_line from "../../../images/line-separator.png";
import analytics_icon from "../../../images/analytics.png";
import reports_icon from "../../../images/reports.png";
import sensors_icon from "../../../images/sensors.png";
import property_icon from "../../../images/property.png";

function Sidebar() {
  return (
    <div className={classes.sidebar}>
      <div className={`${classes["sidebar--item"]} ${classes["main"]}`}>
        <img
          src={IH_icon}
          alt="overview"
          className={`${classes["sidebar--icon"]} ${classes["main--icon"]}`}
        />
      </div>
      <div className={`${classes["sidebar--item"]} ${classes["main"]}`}>
        <img
          src={sep_line}
          alt="separator"
          className={`${classes["sidebar--icon"]}}`}
        />
      </div>
      <div className={`${classes["sidebar--item"]}`}>
        <img
          src={overview_icon}
          alt="overview"
          className={`${classes["sidebar--icon"]}`}
        />
        <p>Overview</p>
      </div>
      <div className={`${classes["sidebar--item"]} ${classes["analytics"]}`}>
        <img
          src={analytics_icon}
          alt="analytics"
          className={`${classes["sidebar--icon"]}`}
        />
        <p>Analytics</p>
      </div>
      <div className={`${classes["sidebar--item"]} ${classes["reports"]}`}>
        <img
          src={reports_icon}
          alt="reports"
          className={`${classes["sidebar--icon"]}`}
        />
        <p>Reports</p>
      </div>
      <div className={`${classes["sidebar--item"]} ${classes["sensors"]}`}>
        <img
          src={sensors_icon}
          alt="sensors"
          className={`${classes["sidebar--icon"]}`}
        />
        <p>Sensors</p>
      </div>
      <div className={`${classes["sidebar--item"]} ${classes["property"]}`}>
        <img
          src={property_icon}
          alt="property"
          className={`${classes["sidebar--icon"]}`}
        />
        <p>Property</p>
      </div>
    </div>
  );
}

export default Sidebar;
