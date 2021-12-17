import React from "react";
import Navbar from "../components/Navbar/Navbar";
import GraphCards from "../components/Analytics/AnalyticsDisplay/GraphCards";


const Analytics = () => {
  return (
    <React.Fragment>
      <Navbar />
      <GraphCards /> 
    </React.Fragment>
  );
};

export default Analytics;
