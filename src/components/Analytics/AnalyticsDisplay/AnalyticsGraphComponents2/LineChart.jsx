import React, { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";

const LineChart = ({ graphData }) => {
  const initialState = {
    series: graphData,
    options: {
      chart: {
        type: "area",
        stacked: false,
        height: 450,
        width: "100%",
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
      responsive: [
        {
          breakpoint: 768,
          options: {
            chart: {
              height: 350,
            },          
          }
        },
        {
          breakpoint: 380,
          options: {
            chart: {
              width: 300
            },            
          }
        },
      ],
      colors: [
        "#546E7A",
        "#E91E63",
        "#1ee9a5",
        "#321ee9",
        "#c44c3c",
        "#e91e1e",
        "#030303",
      ],
      dataLabels: {
        enabled: false,
      },
      markers: {
        size: 0,
      },
      title: {
        text: "abc",
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
      // options: {
      //   title: {
      //     text: "hello"
      //   }
      // }
    }));
  }, [graphData]);

  return (
    <>
      <div id="chart">
        <ReactApexChart
          options={lineChart.options}
          series={lineChart.series}
          type="area"
          height={lineChart.options.chart.height}
          title={lineChart.options.title}
        />
      </div>
    </>
  );
};

export default LineChart;
