import React from "react";
//import { Container, Row, Col } from 'react-bootstrap'
import Sidebar from "./Sidebar";
import Canvas from "./Canvas/Canvas";
import classes from "./Dashboard.module.css";

function Dashboard() {
  return (
    <React.Fragment>
      <Sidebar></Sidebar>

      <main class={`container`}>
        <Canvas></Canvas>
      </main>
    </React.Fragment>
  );
}

export default Dashboard;
