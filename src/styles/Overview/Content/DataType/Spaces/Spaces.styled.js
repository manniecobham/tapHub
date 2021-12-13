import styled from "styled-components";

const SpaceSelectionContainer = styled.div`
  & button {
    background-color: inherit;

    & > h2 {
      margin-right: 10px;
      font-style: normal;
      font-weight: 500;
      font-size: 24px;
      line-height: 28px;
      letter-spacing: 0.4px;
    }

    @media (max-width: 445px) {
      & > h2 {
        font-size: 20px;
      }
    }

    /* @media (max-width: 400px) {
      & > h2 {
        font-size: 16px;
      }
    } */
  }
`;

const SpaceSelectionDropdownContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 99;
  background-color: white;
  border: 1px solid #777777;
  border-radius: 8px;

  @media (max-width: 560px) {
    left: -4rem;
  }

  /* Notifications space selector has different styles from the space selector in Overview Content */
  @media (max-width: 560px) {
    &#for-notifications {
      left: 0;
      width: 200px;

      & .searchbar {
        & input {
          width: 100%;
        }
      }

      ul.spacelist {
        .spacelist__item {
          width: 100%;
        }
      }
    }
  }

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

  & img {
    width: 11px;
    height: 14px;
    margin: auto;
  }
`;

export {
  SpaceSelectionContainer,
  SpaceSelectionDropdownContainer,
  StateContainer,
};
