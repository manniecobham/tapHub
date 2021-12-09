import React from "react";
import OverviewIndex from "../components/Overview/OverviewIndex";
import Navbar from "../components/Navbar/Navbar";

const Overview = (props) => {
  return (
    <React.Fragment>
      <Navbar />
      <OverviewIndex className="main" />
    </React.Fragment>
  );
};

export default Overview;
