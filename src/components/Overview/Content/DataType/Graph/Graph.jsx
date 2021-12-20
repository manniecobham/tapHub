import React, { useState } from "react";
import { useTheme } from "styled-components";

// data
// import { data1, data2, data3 } from "./lineData";
import { data4, data5, data6 } from "./heatData";

// styles
import hamburger from "../../../../../images/Overview/hamburgerb.svg";
import { GraphCard } from "../../../../../styles/Overview/Content/DataType/Graph/Graph.styled";

// components
import GraphSidebar from "./GraphSidebar/GraphSidebar";
import LineChart from "./LineChart";
import HeatMap from "./Heatmap";
import GraphButton from "./GraphButton/GraphButton";

const Graph = (props) => {
  const theme = useTheme();
  const bgColor = theme.colors.colorSecondaryWhite;
  const [graphData, setGraphData] = useState(data5);
  const [isLineChartShown, setIsLineChartShown] = useState(true);

  const onDateChange = (newGraph) => {
    setGraphData(newGraph);
  };

  const onGraphTypeChange = (newGraphType) => {
    setIsLineChartShown(newGraphType);
  };

  const Chart = isLineChartShown ? (
    <LineChart graphData={graphData} />
  ) : (
    <HeatMap graphData={graphData} />
  );

  const [hamburgerIsOpen, setHamburgerIsOpen] = useState(false);

  const openHamburger = () => {
    setHamburgerIsOpen((prev) => !prev);
  };

  return (
    <GraphCard
      backgroundColor={bgColor}
      className={`${props.classes} graph-grid ${
        hamburgerIsOpen ? "graph-grid--hamburger-open" : ""
      }`}
    >
      <button
        className={`hamburger ${hamburgerIsOpen ? "hamburger--open" : ""}`}
        onClick={openHamburger}
      >
        <img src={hamburger} alt="hamb" />
      </button>
      <GraphSidebar hamburgerIsOpen={hamburgerIsOpen} />
      <div className="graph-grid__container-outer">
        <div className="graph-grid__container-inner">
          <GraphButton
            setGraphData={onDateChange}
            setGraphType={onGraphTypeChange}
            data1={data4}
            data2={data5}
            data3={data6}
          />
          {Chart}
        </div>
      </div>
    </GraphCard>
  );
};

export default Graph;
