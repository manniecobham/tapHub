import styled from "styled-components";

const Container = styled.div`
  /*width: ${(props) => props.width};*/
  max-width: 100%;
  padding: 30px 30px 0rem 230px;
  margin: 0 auto;
  overflow: hidden;
  background-color: ${(props) => props.backgroundColor};
`;

export default Container;
