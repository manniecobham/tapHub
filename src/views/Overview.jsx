import React from "react";
import classes from "./Overview.module.css";
import OverviewDashboard from "../components/Overview/OverviewDashboard";
import Sidebar from "../components/Sidebar/Sidebar";

const Overview = () => {
  return (
    <React.Fragment>
      <Sidebar />
      <OverviewDashboard />
    </React.Fragment>
  );
};

export default Overview;
