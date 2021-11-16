import React from "react";
import { useTheme } from "styled-components";
import Container from "../../styles/UI/Container.styled.js";

const AnalyticsDashboard = () => {
  const theme = useTheme();

  return (
    <Container
      width={theme.deviceWidths.desktopWidth}
      backgroundColor={theme.colors.colorNeutralLight}
    >
      <h1>Hello World!</h1>
    </Container>
  );
};

export default AnalyticsDashboard;
