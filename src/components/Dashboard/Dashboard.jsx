import React from "react";
//import { Container, Row, Col } from 'react-bootstrap'
import Sidebar from "./Sidebar";
import Canvas from "./Canvas/Canvas";
import classes from "./Dashboard.module.css";

function Dashboard() {
  return (
    <div class={classes.dashboard}>
      <Sidebar></Sidebar>

      <main class={`container ${classes.canvas}`}>
        <Canvas></Canvas>
      </main>
    </div>
  );
}

export default Dashboard;
