import React from "react";
import Sidebar from "../components/Sidebar/Sidebar";

const Analytics = () => {
  return (
    <React.Fragment>
      <Sidebar id="left" />
      <div
        id="right"
        style={{ width: "100vw", height: "100vh", background: "yellow" }}
      ></div>
    </React.Fragment>
  );
};

export default Analytics;
