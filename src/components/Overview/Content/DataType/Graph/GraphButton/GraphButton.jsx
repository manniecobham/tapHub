import React, { useState, useEffect } from "react";
import Heat_Icon from '../../../../../../images/Overview/gridicon.svg';
import Line_Icon from "../../../../../../images/Overview/Vector.svg";

// styles
import {
  Container,
  Button,
  ButtonContainer,
  GraphNav,
  TimeDisplay,
  TimeDisplayContainer,
  IconImageContainer,
  Icon,
  RelativeChange,
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
    setGraphData(data1);

    setTimeFrame("Today's");

    setButtonColorDay("white");
    setColorDay("black");

    setButtonColorWeek("lightGray");
    setColorWeek("gray");

    setButtonColorMonth("lightGray");
    setColorMonth("gray");
  };

  const onClickWeek = () => {
    setGraphData(data2);

    setTimeFrame("Weekly");

    setButtonColorWeek("white");
    setColorWeek("black");

    setButtonColorMonth("lightGray");
    setColorMonth("gray");

    setButtonColorDay("lightGray");
    setColorDay("gray");
  };

  const onClickMonth = () => {
    setGraphData(data3);

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
    <Container>
      <TimeDisplayContainer>
        <TimeDisplay>{timeFrame} Trends of Instahub Office</TimeDisplay>
        {/* <RelativeChange>hello</RelativeChange> */}
      </TimeDisplayContainer>
      <GraphNav>

        <ButtonContainer>
          <Button
            onClick={onClickLine}
            background={buttonColorLine}
            color={colorLine}
          >
            <IconImageContainer>
              <Icon className="icon" src={Line_Icon} alt="Line" />
            </IconImageContainer>
          </Button>
          <Button
            onClick={onClickHeat}
            background={buttonColorHeat}
            color={colorHeat}
          >
            <IconImageContainer>
              <Icon className="icon" src={Heat_Icon} alt="Heat" />
            </IconImageContainer>
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
    </Container>
    </>
  );
};

export default GraphButton;
