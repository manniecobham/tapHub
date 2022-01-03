import React, { useState } from "react";

import Heat_Icon from "../../../../images/Overview/gridicon.svg";
import Line_Icon from "../../../../images/Overview/Vector.svg";

import {
  Container,
  Button,
} from "../../../../styles/Overview/Content/DataType/Graph/GraphButton/GraphButtonStyles"

const GraphButton = ({ setGraphType }) => {
  //graph style toggle
  const [buttonColorLine, setButtonColorLine] = useState("white");
  const [buttonColorHeat, setButtonColorHeat] = useState("lightgray");

  const [colorLine, setColorLine] = useState("black");
  const [colorHeat, setColorHeat] = useState("gray");

  const onClickLine = () => {
    setGraphType('line');

    setColorLine("black");
    setButtonColorLine("white");

    setColorHeat("gray");
    setButtonColorHeat("lightgray");
  };

  const onClickHeat = () => {
    setGraphType('heat');

    setColorHeat("black");
    setButtonColorHeat("white");

    setColorLine("gray");
    setButtonColorLine("lightgray");
  };

  return (
    <>
      <Container className="buttons">
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
        </div>
      </Container>
    </>
  );
};

export default GraphButton;
