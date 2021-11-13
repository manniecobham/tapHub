import React from "react";
import { useTheme } from "styled-components";
import Header from "./Header/Header";
import OverviewContent from "./Content/OverviewContent";
import Container from "../../styles/UI/Container.styled.js";

const OverviewDashboard = () => {
  const theme = useTheme();

  return (
    <Container
      width={theme.deviceWidths.desktopWidth}
      backgroundColor={theme.colors.colorNeutralLight}
    >
      <Header />
      <OverviewContent />
    </Container>
  );
};

export default OverviewDashboard;
