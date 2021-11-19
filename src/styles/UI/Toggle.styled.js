import styled from "styled-components";

const ToggleGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background-color: #ececec;
  border-radius: 5px;
  width: 60px;
  height: 24px;
  overflow: hidden;
`;

const ToggleButton = styled.button`
  width: 100%;
  margin: 2px;
  padding: 2px;
  cursor: pointer;
  border: none;
  border-radius: 7px;
  display: flex;
  justify-content: center;
  align-items: center;

  &.active {
    background-color: white;
  }

  &.inactive {
    background-color: inherit;
  }
`;

export { ToggleGroup, ToggleButton };
