import React from "react";

import Container from "../../styles/UI/Container.styled.js";

import Header from "./Header/Header";
import Content from "./Content/Content";

const OverviewIndex = (props) => {
  return (
    <Container id={props.id}>
      <Header />
      <Content />
    </Container>
  );
};

export default OverviewIndex;
