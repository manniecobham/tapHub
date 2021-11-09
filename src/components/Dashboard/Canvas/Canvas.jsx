import React from "react";
import Header from "./Header";
import Overview from "../../../views/Overview";
import classes from "./Canvas.module.css";

const Canvas = () => {
  return (
    <div className={`${classes["canvas"]}`}>
      <Header />
      <Overview />
    </div>
  );
};

export default Canvas;
