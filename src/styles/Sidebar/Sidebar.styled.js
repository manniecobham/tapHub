import styled from "styled-components";

const StyledSidebar = styled.ul`
  list-style: none;
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.textColor};
  padding: 25px;
  width: 200px;
  height: 100vh;
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  padding-top: 45px;
`;

export default StyledSidebar;
