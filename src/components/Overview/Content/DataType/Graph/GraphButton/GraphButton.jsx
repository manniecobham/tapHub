import React, { useState } from "react";

import Heat_Icon from "../../../../../../images/Overview/gridicon.svg";
import Line_Icon from "../../../../../../images/Overview/Vector.svg";

import {
  Container,
  Button,
} from "../../../../../../styles/Overview/Content/DataType/Graph/GraphButton/GraphButtonStyles";

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
      <Container className="buttons">
        <div className="time-display">
          <span className="time-display__text">{timeFrame} Trends of Instahub Office</span>
        </div>
        <div className="buttons__outer-container">
          <div className="buttons__inner-container">
            <Button
              onClick={onClickLine}
              background={buttonColorLine}
              color={colorLine}
              className="buttons__button icon"
            >
            <div className="buttons__icon">
              <img src={Line_Icon} alt="Line" />
            </div>
            </Button>
            <Button
              onClick={onClickHeat}
              background={buttonColorHeat}
              color={colorHeat}
              className="buttons__button icon"
            >
            <div className="buttons__icon">
              <img src={Heat_Icon} alt="Heat" />
            </div>
            </Button>
          </div>

          <div className="buttons__inner-container">
            <Button
              onClick={onClickDay}
              background={buttonColorDay}
              color={colorDay}
              className="buttons__button"

            >
              Day
            </Button>
            <Button
              onClick={onClickWeek}
              background={buttonColorWeek}
              color={colorWeek}
              className="buttons__button"

            >
              Week
            </Button>
            <Button
              onClick={onClickMonth}
              background={buttonColorMonth}
              color={colorMonth}
              className="buttons__button"

            >
              Month
            </Button>
          </div>
        </div>
      </Container>
    </>
  );
};

export default GraphButton;
