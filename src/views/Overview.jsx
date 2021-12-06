import React from "react";
import OverviewIndex from "../components/Overview/OverviewIndex";
import Sidebar from "../components/Sidebar/Sidebar";

const Overview = (props) => {
  return (
    <React.Fragment>
      <Sidebar id="left" />
      <OverviewIndex id="right" />
    </React.Fragment>
  );
};

export default Overview;
