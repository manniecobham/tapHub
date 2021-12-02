import React from "react";
import { useTheme } from "styled-components";
import Header from "./Header/Header";
import OverviewContent from "./Content/OverviewContent";
import Container from "../../styles/UI/Container.styled.js";

const OverviewDashboard = (props) => {
  const theme = useTheme();

  return (
    <Container id={props.id}>
      <Header />
      <OverviewContent />
    </Container>
  );
};

export default OverviewDashboard;
