import React from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import AnalyticsDashboard from "../components/Analytics/AnalyticsDashboard";

const Analytics = () => {
  return (
    <React.Fragment>
      <Sidebar />
      <div
        style={{ width: "100vw", height: "100vh", background: "yellow" }}
      ></div>
    </React.Fragment>
  );
};

export default Analytics;
