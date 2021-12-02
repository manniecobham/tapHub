import React, { useContext, useState } from "react";
import lightningIcon from "../../../../images/Overview/lightning.svg";
import dollarIcon from "../../../../images/Overview/dollar.svg";
import moreInfoIcon from "../../../../images/Overview/question.svg";
import { ToggleGroup, ToggleButton } from "../../../../styles/UI/Toggle.styled";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "../../../../styles/UI/Card.styled";
import { useTheme } from "styled-components";
import Context from "../../../../context/context";
import arrow from "../../../../images/Overview/selectionDropdownIcon.svg";

const HCWasted = (props) => {
  const theme = useTheme();
  const context = useContext(Context);
  const titleSize = theme.typography.headerSize;
  const bgColor = theme.colors.colorSecondaryWhite;
  const [firstIconIsActive, setFirstIconIsActive] = useState(true);
  const [secondIconIsActive, setSecondIsActive] = useState(false);
  const [isPositive, setIsPositive] = useState(true);

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
        firstIconIsActive && !secondIconIsActive ? bgColor : "azure"
      }
      className={`${props.classes}`}
    >
      <CardHeader>
        <CardTitle titleSize={titleSize}>H/C Wasted</CardTitle>
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
            ${" "}
            {
              context["userData"]["devices"][0]["metrics"]["hcWasted"][
                "avgDollarsPerWk"
              ]
            }
          </span>
          /wk
        </p>
      </CardContent>
      <CardFooter>
        <div
          className={`relative-change ${
            isPositive ? "relative-change--active" : ""
          }`}
        >
          <img src={arrow} alt="arrow" />
          <p>
            <span>
              {
                context["userData"]["devices"][0]["metrics"]["hcWasted"][
                  "relChange"
                ]
              }
              %
            </span>
            vs last week
          </p>
        </div>
        <img
          src={moreInfoIcon}
          alt="?"
          title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ullamcorper ac sapien eu hendrerit."
        ></img>
      </CardFooter>
    </Card>
  );
};

export default HCWasted;
