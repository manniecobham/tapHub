import React from "react";
import OverviewDashboard from "../components/Overview/OverviewDashboard";
import Sidebar from "../components/Sidebar/Sidebar";

const Overview = (props) => {
  return (
    <React.Fragment>
      <Sidebar />
      <OverviewDashboard />
    </React.Fragment>
  );
};

export default Overview;
