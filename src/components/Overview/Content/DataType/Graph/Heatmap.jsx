import React, { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";

const HeatMap = ({ graphData, isShown }) => {
  const initialState = {
    series: graphData,

    options: {
      chart: {
        height: 350,
        type: "heatmap",
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        heatmap: {
          shadeIntensity: 0.5,
          radius: 0,
          useFillColorAsStroke: true,
          colorScale: {
            ranges: [
              {
                from: 0,
                to: 13,
                name: "low",
                color: "#00A100",
              },
              {
                from: 14,
                to: 26,
                name: "medium",
                color: "#128FD9",
              },
              {
                from: 26,
                to: 39,
                name: "high",
                color: "#FFB200",
              },
              {
                from: 39,
                to: 50,
                name: "extreme",
                color: "#FF0000",
              },
            ],
          },
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        width: 1,
      },
      title: {
        text: "HeatMap Chart with Color Range",
      },
    },
  };

  const [heatMap, setHeatMap] = useState(initialState);

  useEffect(() => {
    setHeatMap((prev) => ({
      ...prev,
      series: graphData,
    }));
  }, [graphData]);

  return (
    <>
      <div id="chart">
        <ReactApexChart
          options={heatMap.options}
          series={heatMap.series}
          type="heatmap"
          height={450}
        />
      </div>
    </>
  );
};

export default HeatMap;
