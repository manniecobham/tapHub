import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";
import GraphButton from "./GraphButton/GraphButton";

const LineChart = ({data1, data2, data3}) => {

  const initialState = {
    series: data1,
    options: {
      chart: {
        type: "area",
        stacked: false,
        height: 350,
        zoom: {
          type: "x",
          enabled: true,
          autoScaleYaxis: true
        },
        toolbar: {
          autoSelected: "zoom"
        }
      },
      colors: ['#546E7A', '#E91E63'],
      dataLabels: {
        enabled: false
      },
      markers: {
        size: 0
      },
      title: {
        text: " Movement",
        align: "left"
      },
      fill: {
        type: "gradient",
        gradient: {
          shadeIntensity: 1,
          inverseColors: false,
          opacityFrom: 0.5,
          opacityTo: 0,
          stops: [0, 90, 100]
        }
      },
      yaxis: {
        labels: {
          formatter: function (val) {
            return val;
          }
        },
        title: {
          text: "Feature"
        }
      },
      xaxis: {
        type: "Hours",
        // title: {
        //   text: "Day"
        // }
      },
      tooltip: {
        shared: false,
        y: {
          formatter: function (val) {
            return val;
          }
        }
      }
    }
  };

  const [lineChart, setLineChart] = useState(initialState)

  return (
    <>
    <GraphButton setChartData={setLineChart} data1={data1} data2={data2} data3={data3} />
    <div id="chart">
      <ReactApexChart
        options={lineChart.options}
        series={lineChart.series}
        type="area"
        height={350}
      />
    </div>
    </>
  );
}

export default LineChart;
