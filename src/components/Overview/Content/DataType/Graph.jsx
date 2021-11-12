import React from "react";
import classes from "./Graph.module.css";

const Graph = (props) => {
  return (
    <section className={`${classes.graph}`}>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
        imperdiet lacinia orci id viverra. Vestibulum molestie mauris at nisi
        volutpat imperdiet. Fusce sit amet massa ut nisl varius scelerisque.
        Proin ut fringilla diam, sed ullamcorper est. Nunc lorem risus,
        elementum eget ul.
      </p>
    </section>
  );
};

export default Graph;
