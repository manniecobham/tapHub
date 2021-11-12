import React from "react";
import { useTheme } from "styled-components";
import StyledSidebar from "./Sidebar.styled.js";
import IH_icon from "../../instahubIcon.png";
import overview_icon from "../../images/overview.png";
import sep_line from "../../images/line-separator.png";
import analytics_icon from "../../images/analytics.png";
import reports_icon from "../../images/reports.png";
import sensors_icon from "../../images/sensors.png";
import property_icon from "../../images/property.png";

const Sidebar = () => {
  const theme = useTheme();
  const bgColor = theme.colors.colorPrimaryDarkBlue;
  const textColor = theme.colors.colorSecondaryWhite;

  return (
    <StyledSidebar backgroundColor={bgColor} textColor={textColor}>
      <div className="sidebar--item main">
        <img
          src={IH_icon}
          alt="overview"
          className="sidebar--icon main--icon"
        />
      </div>
      <div className="sidebar--item main">
        <img src={sep_line} alt="separator" />
      </div>
      <div className="sidebar--item">
        <img src={overview_icon} alt="overview" className="sidebar--icon" />
        <p>Overview</p>
      </div>
      <div className="sidebar--item analytics">
        <img src={analytics_icon} alt="analytics" className="sidebar--icon" />
        <p>Analytics</p>
      </div>
      <div className="sidebar--item reports">
        <img src={reports_icon} alt="reports" className="sidebar--icon" />
        <p>Reports</p>
      </div>
      <div className="sidebar--item sensors">
        <img src={sensors_icon} alt="sensors" className="sidebar--icon" />
        <p>Sensors</p>
      </div>
      <div className="sidebar--item property">
        <img src={property_icon} alt="property" className="sidebar--icon" />
        <p>Property</p>
      </div>
    </StyledSidebar>
  );
};

export default Sidebar;

// const Sidebar = () => {
//   return (
//     <StyledSidebar>
//       <div className={`${classes["sidebar--item"]} ${classes["main"]}`}>
//         <img
//           src={IH_icon}
//           alt="overview"
//           className={`${classes["sidebar--icon"]} ${classes["main--icon"]}`}
//         />
//       </div>
//       <div className={`${classes["sidebar--item"]} ${classes["main"]}`}>
//         <img
//           src={sep_line}
//           alt="separator"
//           className={`${classes["sidebar--icon"]}}`}
//         />
//       </div>
//       <div className={`${classes["sidebar--item"]}`}>
//         <img
//           src={overview_icon}
//           alt="overview"
//           className={`${classes["sidebar--icon"]}`}
//         />
//         <p>Overview</p>
//       </div>
//       <div className={`${classes["sidebar--item"]} ${classes["analytics"]}`}>
//         <img
//           src={analytics_icon}
//           alt="analytics"
//           className={`${classes["sidebar--icon"]}`}
//         />
//         <p>Analytics</p>
//       </div>
//       <div className={`${classes["sidebar--item"]} ${classes["reports"]}`}>
//         <img
//           src={reports_icon}
//           alt="reports"
//           className={`${classes["sidebar--icon"]}`}
//         />
//         <p>Reports</p>
//       </div>
//       <div className={`${classes["sidebar--item"]} ${classes["sensors"]}`}>
//         <img
//           src={sensors_icon}
//           alt="sensors"
//           className={`${classes["sidebar--icon"]}`}
//         />
//         <p>Sensors</p>
//       </div>
//       <div className={`${classes["sidebar--item"]} ${classes["property"]}`}>
//         <img
//           src={property_icon}
//           alt="property"
//           className={`${classes["sidebar--icon"]}`}
//         />
//         <p>Property</p>
//       </div>
//     </StyledSidebar>
//   );
// };
