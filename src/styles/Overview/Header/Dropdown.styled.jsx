import styled from "styled-components";

const Dropdown = styled.ul`
  z-index: 10;
  position: absolute;
  right: 0px;
  display: flex;
  flex-direction: column;
  list-style: none;
  background: white;
  border-radius: 10px;
  border: 1px solid black;
  padding: 5px;
`;

export default Dropdown;
