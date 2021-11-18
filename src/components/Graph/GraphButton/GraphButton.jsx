import React, { useState, useEffect } from "react";

// styles
import {
  Button,
  ButtonContainer,
  GraphNav,
  TimeDisplay,
  TimeDisplayContainer,
} from "./GraphButtonStyles";

const GraphButton = ({ setGraphType, setGraphData, data1, data2, data3 }) => {
  //time frame toggle
  const [timeFrame, setTimeFrame] = useState("Today's");

  const [buttonColorDay, setButtonColorDay] = useState("white");
  const [buttonColorWeek, setButtonColorWeek] = useState("lightgray");
  const [buttonColorMonth, setButtonColorMonth] = useState("lightgray");

  const [colorDay, setColorDay] = useState("black");
  const [colorWeek, setColorWeek] = useState("gray");
  const [colorMonth, setColorMonth] = useState("gray");

  //graph style toggle
  const [buttonColorLine, setButtonColorLine] = useState("white");
  const [buttonColorHeat, setButtonColorHeat] = useState("lightgray");

  const [colorLine, setColorLine] = useState("black");
  const [colorHeat, setColorHeat] = useState("gray");

  const onClickDay = () => {
    //setGraphData(data1);
    setGraphData((prevState) => ({
      ...prevState,
      series: data1,
    }));

    setTimeFrame("Today's");

    setButtonColorDay("white");
    setColorDay("black");

    setButtonColorWeek("lightGray");
    setColorWeek("gray");

    setButtonColorMonth("lightGray");
    setColorMonth("gray");
  };

  const onClickWeek = () => {
    //setGraphData(data2);
    setGraphData((prevState) => ({
      ...prevState,
      series: data2,
    }));

    setTimeFrame("Weekly");

    setButtonColorWeek("white");
    setColorWeek("black");

    setButtonColorMonth("lightGray");
    setColorMonth("gray");

    setButtonColorDay("lightGray");
    setColorDay("gray");
  };

  const onClickMonth = () => {
    //setGraphData(data3);
    setGraphData((prevState) => ({
      ...prevState,
      series: data3,
    }));

    setTimeFrame("Monthly");

    setButtonColorMonth("white");
    setColorMonth("black");

    setButtonColorDay("lightGray");
    setColorDay("gray");

    setButtonColorWeek("lightGray");
    setColorWeek("gray");
  };
  const onClickLine = () => {
    setGraphType(true);

    setColorLine("black");
    setButtonColorLine("white");

    setColorHeat("gray");
    setButtonColorHeat("lightgray");
  };

  const onClickHeat = () => {
    setGraphType(false);

    setColorHeat("black");
    setButtonColorHeat("white");

    setColorLine("gray");
    setButtonColorLine("lightgray");
  };

  return (
    <>
      <GraphNav>
        <TimeDisplayContainer>
          <TimeDisplay>{timeFrame} Trends</TimeDisplay>
        </TimeDisplayContainer>

        <ButtonContainer>
          <Button
            onClick={onClickLine}
            background={buttonColorLine}
            color={colorLine}
          >
            Line
          </Button>
          <Button
            onClick={onClickHeat}
            background={buttonColorHeat}
            color={colorHeat}
          >
            Heat
          </Button>
        </ButtonContainer>

        <ButtonContainer>
          <Button
            onClick={onClickDay}
            background={buttonColorDay}
            color={colorDay}
          >
            Day
          </Button>
          <Button
            onClick={onClickWeek}
            background={buttonColorWeek}
            color={colorWeek}
          >
            Week
          </Button>
          <Button
            onClick={onClickMonth}
            background={buttonColorMonth}
            color={colorMonth}
          >
            Month
          </Button>
        </ButtonContainer>
      </GraphNav>
    </>
  );
};

export default GraphButton;
