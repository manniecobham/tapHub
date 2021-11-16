import React from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import AnalyticsDashboard from "../components/Analytics/AnalyticsDashboard";

const Sensors = () => {
  return (
    <React.Fragment>
      <Sidebar />
      <AnalyticsDashboard />
    </React.Fragment>
  );
};

export default Sensors;
