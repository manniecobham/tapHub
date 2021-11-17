import React from "react";
import { useTheme } from "styled-components";
import { StyledSidebar } from "../../styles/Sidebar/Sidebar.styled";
import SidebarItem from "./SidebarItem";
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
    <nav>
      <StyledSidebar backgroundColor={bgColor} textColor={textColor}>
        <SidebarItem path="/" icon={IH_icon} />
        <SidebarItem icon={sep_line} />
        <SidebarItem path="/overview" page="Overview" icon={overview_icon} />
        <SidebarItem path="/analytics" page="Analytics" icon={analytics_icon} />
        <SidebarItem path="/reports" page="Reports" icon={reports_icon} />
        <SidebarItem path="/sensors" page="Sensors" icon={sensors_icon} />
        <SidebarItem path="/property" page="Property" icon={property_icon} />
      </StyledSidebar>
    </nav>
  );
};

export default Sidebar;
