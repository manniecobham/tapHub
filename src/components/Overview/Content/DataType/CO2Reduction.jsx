import React, { useContext, useState } from "react";
import { useTheme } from "styled-components";
import Context from "../../../../context/context";

import lightningIcon from "../../../../images/Overview/lightning.svg";
import dollarIcon from "../../../../images/Overview/dollar.svg";
import moreInfoIcon from "../../../../images/Overview/question.svg";
import arrow from "../../../../images/Overview/selectionDropdownIcon.svg";
import { ToggleGroup } from "../../../../styles/UI/Toggle.styled";
import { Card } from "../../../../styles/UI/Card.styled";

const CO2Reduction = (props) => {
  const context = useContext(Context);
  const theme = useTheme();
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
      className={`card ${props.classes}`}
    >
      <div className="card__header">
        <h2 className="card__header-title" titleSize={titleSize}>
          CO2 Reduction
        </h2>
        <ToggleGroup className="toggle-group">
          <button
            className={`toggle-group__button ${
              firstIconIsActive ? "active" : null
            }`}
            onClick={onClickFirst}
          >
            <img
              src={lightningIcon}
              alt="lightning"
              className={firstIconIsActive ? "filterBlack" : "filterGray"}
            />
          </button>
          <button
            className={`toggle-group__button ${
              secondIconIsActive ? "active" : null
            }`}
            onClick={onClickSecond}
          >
            <img
              src={dollarIcon}
              alt="dollar"
              className={secondIconIsActive ? "filterBlack" : "filterGray"}
            />
          </button>
        </ToggleGroup>
      </div>
      <div className="card__content">
        <p>
          <span className="lead">
            {
              context["userData"]["devices"][0]["metrics"]["co2Reduction"][
                "avgLbsPerWk"
              ]
            }
          </span>
          lbs/wk
        </p>
      </div>
      <div className="card__footer">
        <div
          className={`relative-change ${
            isPositive ? "relative-change--active" : ""
          }`}
        >
          <img src={arrow} alt="arrow" />
          <p>
            <span>
              {
                context["userData"]["devices"][0]["metrics"]["co2Reduction"][
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
      </div>
    </Card>
  );
};

export default CO2Reduction;
