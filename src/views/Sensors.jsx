import React from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import AnalyticsDashboard from "../components/Analytics/AnalyticsDashboard";

const Sensors = () => {
  return (
    <React.Fragment>
      <Sidebar />
      <div
        style={{ width: "100vw", height: "100vh", background: "green" }}
      ></div>
    </React.Fragment>
  );
};

export default Sensors;
