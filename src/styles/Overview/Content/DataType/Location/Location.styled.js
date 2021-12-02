import styled from "styled-components";

const SpaceSelectionContainer = styled.div`
  & button {
    background-color: white;

    & > h2 {
      margin-right: 10px;
    }
  }
`;

const SpaceSelectionDropdownContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background-color: white;
  border: 1px solid #777777;
  border-radius: 8px;

  & > form {
    padding: 12px;

    & > div {
      padding: 9px;
      background-color: rgba(242, 242, 242, 1);
      border-radius: 5px;
      display: flex;
      gap: 10px;

      & > img {
      }

      & > input {
        font-size: 16px;
        border: none;
        background-color: inherit;
        outline: none;
      }
    }
  }
  ul.spacelist {
    display: flex;
    flex-direction: column;
    list-style: none;

    .spacelist__item {
      width: 302px;
      padding: 16px;

      &--active {
        color: black;
        background-color: rgba(234, 234, 234, 1);
      }

      & > button {
        width: 100%;
        border: none;
        background-color: inherit;
        font-size: inherit;
        display: flex;
        justify-content: space-between;
        align-items: center;
        cursor: pointer;
      }

      &:hover {
        background-color: lightgray;
      }
    }
  }
`;

const StateContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background-color: #ececec;
  border-radius: 5px;
  width: 60px;
  height: 24px;
  padding: 0 7px;
  margin-left: 10px;
`;

export {
  SpaceSelectionContainer,
  SpaceSelectionDropdownContainer,
  StateContainer,
};
