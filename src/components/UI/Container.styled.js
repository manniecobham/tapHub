import styled from "styled-components";

const Container = styled.div`
  max-width: ${(props) => props.width};
  padding: 30px 30px 0rem 230px;
  overflow: hidden;
  background-color: ${(props) => props.backgroundColor};
`;

export default Container;
