import React from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import AnalyticsDashboard from "../components/Analytics/AnalyticsDashboard";

const Property = () => {
  return (
    <React.Fragment>
      <Sidebar id="left" />
      <div
        id="right"
        style={{ width: "100vw", height: "100vh", background: "red" }}
      ></div>
    </React.Fragment>
  );
};

export default Property;
