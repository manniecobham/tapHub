import React from "react";
import OverviewDashboard from "../components/Overview/OverviewDashboard";
import Sidebar from "../components/Sidebar/Sidebar";

const Overview = (props) => {
  return (
    <React.Fragment>
      <Sidebar id="left" />
      <OverviewDashboard id="right" />
    </React.Fragment>
  );
};

export default Overview;
