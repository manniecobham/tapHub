import styled from "styled-components";

const Dropdown = styled.div`
  position: relative;
`;

const DropdownList = styled.ul`
  z-index: 10;
  position: absolute;
  right: 0px;
  display: flex;
  flex-direction: column;
  list-style: none;
  background: white;
  border-radius: 10px;
  padding: 4px;
  box-shadow: 0px 0px 5px;
`;

export { Dropdown, DropdownList };
