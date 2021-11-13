import React from "react";
import lightningIcon from "../../../../images/card_data/lightning.png";
import dollarIcon from "../../../../images/card_data/dollar.png";
import ToggleGroup from "../../../UI/ToggleGroup";
import CardHeader from "../../../../styles/UI/CardHeader.styled";
import CardTitle from "../../../../styles/UI/CardTitle.styled";
import { useTheme } from "styled-components";

const CO2Reduction = (props) => {
  const theme = useTheme();
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
      <p>99%</p>
    </React.Fragment>
  );
};

export default CO2Reduction;
