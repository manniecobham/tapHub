import React from "react";
import classes from "./OverviewDashboard.module.css";
import Sidebar from "../Sidebar/Sidebar";
import Header from "./Canvas/Header";
import OverviewContent from "./OverviewContent";

const OverviewDashboard = () => {
  return (
    <div className={classes.dashboard}>
      <Sidebar></Sidebar>

      <main className={`container`}>
        <div className={`${classes.canvas}`}>
          <Header />
          <OverviewContent />
        </div>
      </main>
    </div>
  );
};

export default OverviewDashboard;
