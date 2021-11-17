import React, { useContext } from "react";
import lightningIcon from "../../../../images/Overview/lightning.svg";
import dollarIcon from "../../../../images/Overview/dollar.svg";
import ToggleGroup from "../../../UI/ToggleGroup";
import { useTheme } from "styled-components";
import {
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "../../../../styles/UI/Card.styled";
import Context from "../../../../context/context";

const CO2Reduction = (props) => {
  const theme = useTheme();
  const context = useContext(Context);
  const titleSize = theme.typography.headerSize;

  return (
    <React.Fragment>
      <CardHeader>
        <CardTitle titleSize={titleSize}>CO2 Reduction</CardTitle>
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
            {context["userData"]["floors"]["first"]["co2_reduction"]}
          </span>{" "}
          lbs/wk
        </p>
      </CardContent>
      <CardFooter>
        <div>
          <p>35.2% vs last week</p>
        </div>
        <img alt="?"></img>
      </CardFooter>
    </React.Fragment>
  );
};

export default CO2Reduction;
