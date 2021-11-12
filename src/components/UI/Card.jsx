import React from "react";
import { useTheme } from "styled-components";
import StyledCard from "./Card.styled";

const Card = (props) => {
  const theme = useTheme();

  return (
    <StyledCard
      backgroundColor={theme.colors.colorSecondaryWhite}
      className={props.classes}
    >
      {props.children}
    </StyledCard>
  );
};

export default Card;
