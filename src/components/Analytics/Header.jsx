import { StyledHeader } from "./Header.styled";
import { ThemeProvider } from "styled-components";

// You can put this in another file too
const theme = {
  colors: {
    header: "black",
    body: "#fff",
    footer: "#004444",
  },
};

const Header = () => {
  return (
    <ThemeProvider theme={theme}>
      <StyledHeader bg="red">
        <h1>Hubble</h1>
      </StyledHeader>
    </ThemeProvider>
  );
};

export default Header;
