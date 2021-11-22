import styled from "styled-components";

const NotificationListItem = styled.li`
  z-index: 11;

  .read {
    background-color: white;
  }

  & > button {
    border: none;
    background: rgba(11, 123, 255, 0.05);
    border-radius: 5px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 7px;
    cursor: pointer;

    &::hover {
      background-color: red;
    }

    .icon {
      margin: auto 10px auto 10px;
    }

    .content {
      flex-grow: 2;

      .title {
        display: flex;
        justify-content: space-between;
        padding: 10px 0px 5px 0px;
      }

      .message {
        text-align: left;
        padding: 5px 0px 10px 0px;
      }
    }
  }
`;

const NotificationDropdownContainer = styled.div`
  z-index: 10;
  position: absolute;
  display: flex;
  right: 0px;
  flex-direction: column;
  gap: 15px;
  list-style: none;
  background: white;
  border-radius: 10px;
  padding: 4px;
  box-shadow: 0px 0px 5px;
  width: 529px;
  max-height: 660px;
  overflow: auto;

  & > ul {
    list-style: none;
  }
`;

export { NotificationListItem, NotificationDropdownContainer };
