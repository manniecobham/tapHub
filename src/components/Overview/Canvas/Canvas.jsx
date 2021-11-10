import React from "react";
import Header from "./Header";
import classes from "./Canvas.module.css";
import OverviewContent from "../OverviewContent";

const Canvas = () => {
  return (
    <div className={`${classes["canvas"]}`}>
      <Header />
      <OverviewContent />
    </div>
  );
};

export default Canvas;
