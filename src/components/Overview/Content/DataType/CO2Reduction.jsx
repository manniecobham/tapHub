import React, { useContext, useState } from "react";
import lightningIcon from "../../../../images/Overview/lightning.svg";
import dollarIcon from "../../../../images/Overview/dollar.svg";
import moreInfoIcon from "../../../../images/Overview/question.svg";
import { ToggleGroup, ToggleButton } from "../../../../styles/UI/Toggle.styled";
import { Card } from "../../../../styles/UI/Card.styled";
import { useTheme } from "styled-components";
import {
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "../../../../styles/UI/Card.styled";
import Context from "../../../../context/context";

const CO2Reduction = (props) => {
  const context = useContext(Context);
  const theme = useTheme();
  const titleSize = theme.typography.headerSize;
  const bgColor = theme.colors.colorSecondaryWhite;
  const [firstIconIsActive, setFirstIconIsActive] = useState(true);
  const [secondIconIsActive, setSecondIsActive] = useState(false);

  const onClickFirst = () => {
    setFirstIconIsActive(true);
    setSecondIsActive(false);
  };

  const onClickSecond = () => {
    setSecondIsActive(true);
    setFirstIconIsActive(false);
  };

  return (
    <Card
      backgroundColor={
        firstIconIsActive && !secondIconIsActive
          ? bgColor
          : theme.colors.colorPrimaryNeutralBlue
      }
      className={`${props.classes}`}
    >
      <CardHeader>
        <CardTitle titleSize={titleSize}>CO2 Reduction</CardTitle>
        <ToggleGroup>
          <ToggleButton
            className={firstIconIsActive ? "active" : null}
            onClick={onClickFirst}
          >
            <img
              src={lightningIcon}
              alt="lightning"
              className={firstIconIsActive ? "filterBlack" : "filterGray"}
            />
          </ToggleButton>
          <ToggleButton
            className={secondIconIsActive ? "active" : null}
            onClick={onClickSecond}
          >
            <img
              src={dollarIcon}
              alt="dollar"
              className={secondIconIsActive ? "filterBlack" : "filterGray"}
            />
          </ToggleButton>
        </ToggleGroup>
      </CardHeader>
      <CardContent>
        <p>
          <span className="lead">
            {context["userData"]["location"]["metrics"]["co2_reduction"]}
          </span>
          lbs/wk
        </p>
      </CardContent>
      <CardFooter>
        <div>
          <p>35.2% vs last week</p>
        </div>
        <img src={moreInfoIcon} alt="?"></img>
      </CardFooter>
    </Card>
  );
};

export default CO2Reduction;
