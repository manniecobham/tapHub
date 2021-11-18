import React, { useContext } from "react";
import lightningIcon from "../../../../images/Overview/lightning.svg";
import dollarIcon from "../../../../images/Overview/dollar.svg";
import moreInfoIcon from "../../../../images/Overview/question.svg";
import ToggleGroup from "../../../UI/ToggleGroup";
import {
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "../../../../styles/UI/Card.styled";
import { useTheme } from "styled-components";
import Context from "../../../../context/context";

const HCWasted = () => {
  const theme = useTheme();
  const context = useContext(Context);
  const titleSize = theme.typography.headerSize;

  return (
    <React.Fragment>
      <CardHeader>
        <CardTitle titleSize={titleSize}>H/C Wasted</CardTitle>
        <ToggleGroup
          src1={lightningIcon}
          alt1="lightning"
          src2={dollarIcon}
          alt2="dollar"
        />
      </CardHeader>
      <CardContent>
        <p>
          <span className="lead">
            ${context["userData"]["location"]["metrics"]["hc_wasted"]}
          </span>
          /wk
        </p>
      </CardContent>
      <CardFooter>
        <div>
          <p>12.6% vs last week</p>
        </div>
        <img src={moreInfoIcon} alt="?"></img>
      </CardFooter>
    </React.Fragment>
  );
};

export default HCWasted;
