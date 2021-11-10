import React, { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";

//styles
// import { Button, ButtonContainer, GraphNav, TimeDisplay, TimeDisplayContainer } from './styles'

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

  // const [clickedDay, setClickedDay] = useState(true);
  // const [clickedWeek, setClickedWeek] = useState(false);
  // const [clickedMonth, setClickedMonth] = useState(false);
  // const [buttonColorDay, setButtonColorDay] = useState('white')
  // const [buttonColorWeek, setButtonColorWeek] = useState('lightgray')
  // const [buttonColorMonth, setButtonColorMonth] = useState('lightgray')
  // const [colorDay, setColorDay] = useState('black')
  // const [colorWeek, setColorWeek] = useState('gray')
  // const [colorMonth, setColorMonth] = useState('gray')

  // const [timeFrame, setTimeFrame] = useState("Today's")

  // useEffect(() => {
  //   // console.log("ClickedDay is " + clickedDay);
  //   // console.log("ClickedWeek is " + clickedWeek);
  //   // console.log("ClickedMonth is " + clickedMonth);
  // }, [clickedDay, clickedWeek, clickedMonth]);

  // const onClickDay = () => {
  //   if (!clickedDay) {
  //     setClickedDay(true);
  //     setButtonColorDay("white");
  //     setColorDay("black");

  //     setLineChart(prevState => ({
  //       ...prevState,
  //       series: data1
  //     }))

  //     setTimeFrame("Today's")

  //     setClickedWeek(false);
  //     setButtonColorWeek('lightGray');
  //     setColorWeek('gray');

  //     setClickedMonth(false);
  //     setButtonColorMonth('lightGray');
  //     setColorMonth('gray');
  //   } else {
  //     setClickedDay(false);
  //     setButtonColorDay("lightGray");
  //     setColorDay("gray");
  //   }
  // };

  // const onClickWeek = () => {
  //   if (!clickedWeek) {
  //     setClickedWeek(true);
  //     setButtonColorWeek('white');
  //     setColorWeek('black');

  //     setLineChart(prevState => ({
  //       ...prevState,
  //       series: data2
  //     }))
      
  //     setTimeFrame("Weekly")

  //     setClickedMonth(false);
  //     setButtonColorMonth('lightGray');
  //     setColorMonth('gray');

  //     setClickedDay(false);
  //     setButtonColorDay("lightGray");
  //     setColorDay("gray");
  //   } else {
  //     setClickedWeek(false);
  //     setButtonColorWeek('lightGray');
  //     setColorWeek('gray');
  //   }
  // }

  // const onClickMonth = () => {
  //   if (!clickedMonth) {
  //     setClickedMonth(true);
  //     setButtonColorMonth('white');
  //     setColorMonth('black');

  //     setLineChart(prevState => ({
  //       ...prevState,
  //       series: data3
  //     }))

  //     setTimeFrame("Monthly")

  //     setClickedDay(false);
  //     setButtonColorDay("lightGray");
  //     setColorDay("gray");

  //     setClickedWeek(false);
  //     setButtonColorWeek('lightGray');
  //     setColorWeek('gray');
  //   } else {
  //     setClickedMonth(false);
  //     setButtonColorMonth('lightGray');
  //     setColorMonth('gray');
  //   }
  // } 

  return (
    <>

    
    {/* <GraphNav>
      <TimeDisplayContainer>
        <TimeDisplay>{timeFrame} Trends</TimeDisplay>
      </TimeDisplayContainer>

      <ButtonContainer>     
        <Button onClick={onClickDay} background={buttonColorDay} color={colorDay}>Day</Button>
        <Button onClick={onClickWeek} background={buttonColorWeek} color={colorWeek}>Week</Button>
        <Button onClick={onClickMonth} background={buttonColorMonth} color={colorMonth}>Month</Button>
      </ButtonContainer>  
    </GraphNav> */}

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
