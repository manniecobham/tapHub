import styled from "styled-components";

const Container = styled.div`
  max-width: 100%;
  height: 100vh;
  padding: 20px;
  margin: 0 auto;
  overflow: auto;
  background-color: ${(props) => props.backgroundColor};
`;

export default Container;
