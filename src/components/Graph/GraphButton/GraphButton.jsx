import React, { useState, useEffect } from "react";

// styles
import { Button, ButtonContainer, GraphNav, TimeDisplay, TimeDisplayContainer } from '../styles'

const GraphButton = ({ setChartData, data1, data2, data3 }) => {

  const [clickedDay, setClickedDay] = useState(true);
  const [clickedWeek, setClickedWeek] = useState(false);
  const [clickedMonth, setClickedMonth] = useState(false);
  const [buttonColorDay, setButtonColorDay] = useState('white')
  const [buttonColorWeek, setButtonColorWeek] = useState('lightgray')
  const [buttonColorMonth, setButtonColorMonth] = useState('lightgray')
  const [colorDay, setColorDay] = useState('black')
  const [colorWeek, setColorWeek] = useState('gray')
  const [colorMonth, setColorMonth] = useState('gray')

  const [timeFrame, setTimeFrame] = useState("Today's")

  useEffect(() => {
    // console.log("ClickedDay is " + clickedDay);
    // console.log("ClickedWeek is " + clickedWeek);
    // console.log("ClickedMonth is " + clickedMonth);
  }, [clickedDay, clickedWeek, clickedMonth]);

  const onClickDay = () => {
    if (!clickedDay) {
      setClickedDay(true);
      setButtonColorDay("white");
      setColorDay("black");

      setChartData(prevState => ({
        ...prevState,
        series: data1
      }))

      setTimeFrame("Today's")

      setClickedWeek(false);
      setButtonColorWeek('lightGray');
      setColorWeek('gray');

      setClickedMonth(false);
      setButtonColorMonth('lightGray');
      setColorMonth('gray');
    } else {
      setClickedDay(false);
      setButtonColorDay("lightGray");
      setColorDay("gray");
    }
  };

  const onClickWeek = () => {
    if (!clickedWeek) {
      setClickedWeek(true);
      setButtonColorWeek('white');
      setColorWeek('black');

      setChartData(prevState => ({
        ...prevState,
        series: data2
      }))
      
      setTimeFrame("Weekly")

      setClickedMonth(false);
      setButtonColorMonth('lightGray');
      setColorMonth('gray');

      setClickedDay(false);
      setButtonColorDay("lightGray");
      setColorDay("gray");
    } else {
      setClickedWeek(false);
      setButtonColorWeek('lightGray');
      setColorWeek('gray');
    }
  }

  const onClickMonth = () => {
    if (!clickedMonth) {
      setClickedMonth(true);
      setButtonColorMonth('white');
      setColorMonth('black');

      setChartData(prevState => ({
        ...prevState,
        series: data3
      }))

      setTimeFrame("Monthly")

      setClickedDay(false);
      setButtonColorDay("lightGray");
      setColorDay("gray");

      setClickedWeek(false);
      setButtonColorWeek('lightGray');
      setColorWeek('gray');
    } else {
      setClickedMonth(false);
      setButtonColorMonth('lightGray');
      setColorMonth('gray');
    }
  } 

  return (
    <>
    <GraphNav>
      <TimeDisplayContainer>
        <TimeDisplay>{timeFrame} Trends</TimeDisplay>
      </TimeDisplayContainer>

      <ButtonContainer>     
        <Button onClick={onClickDay} background={buttonColorDay} color={colorDay}>Day</Button>
        <Button onClick={onClickWeek} background={buttonColorWeek} color={colorWeek}>Week</Button>
        <Button onClick={onClickMonth} background={buttonColorMonth} color={colorMonth}>Month</Button>
      </ButtonContainer>  
    </GraphNav>
    </>
  )
}

export default GraphButton
