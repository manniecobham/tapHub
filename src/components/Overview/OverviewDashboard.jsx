import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import Canvas from "./Canvas/Canvas";
import Header from "./Canvas/Header";
import OverviewContent from "./OverviewContent";
import classes from "./OverviewDashboard.module.css";

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
