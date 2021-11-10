import React from "react";
import classes from "./OverviewDashboard.module.css";
import Header from "./Header/Header";
import OverviewContent from "./Content/OverviewContent";

const OverviewDashboard = () => {
  return (
    <main className={`${classes.canvas} container`}>
      <Header />
      <OverviewContent />
    </main>
  );
};

export default OverviewDashboard;
