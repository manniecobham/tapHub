import React, { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";
import GraphButton from "./GraphButton/GraphButton";

const LineChart = ({ graphData }) => {
  const initialState = {
    series: graphData,
    options: {
      chart: {
        type: "area",
        stacked: false,
        height: 350,
        zoom: {
          type: "x",
          enabled: true,
          autoScaleYaxis: true,
        },
        toolbar: {
          autoSelected: "zoom",
          show: false,
        },
      },
      colors: ["#546E7A", "#E91E63", "#1ee9a5", "#321ee9", "#c44c3c", "#e91e1e", "#030303" ],
      dataLabels: {
        enabled: false,
      },
      markers: {
        size: 0,
      },
      title: {
        text: " Movement",
        align: "left",
      },
      fill: {
        type: "gradient",
        gradient: {
          shadeIntensity: 1,
          inverseColors: false,
          opacityFrom: 0.5,
          opacityTo: 0,
          stops: [0, 90, 100],
        },
      },
      yaxis: {
        labels: {
          formatter: function (val) {
            return val;
          },
        },
        title: {
          text: "Feature",
        },
      },
      xaxis: {
        // type: "category",
        // title: {
        //   text: "Day"
        // }
      },
      tooltip: {
        shared: false,
        y: {
          formatter: function (val) {
            return val;
          },
        },
      },
    },
  };

  const [lineChart, setLineChart] = useState(initialState);

  useEffect(() => {
    setLineChart((prev) => ({
      ...prev,
      series: graphData,
    }));
  }, [graphData]);

  return (
    <>
      <div id="chart">
        <ReactApexChart
          options={lineChart.options}
          series={lineChart.series}
          type="area"
          height={450}
        />
      </div>
    </>
  );
};

export default LineChart;
