import React from "react";

import Container from "../../styles/UI/Container.styled.js";

import Content from "./Content/Content";

const OverviewIndex = (props) => {
  return (
    <Container className={props.className}>
      <Content />
    </Container>
  );
};

export default OverviewIndex;
