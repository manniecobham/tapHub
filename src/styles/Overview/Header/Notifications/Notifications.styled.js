import styled from "styled-components";

const NotificationContainer = styled.div`
  position: relative;
  .notification__new--alert {
    fill: lightblue;
    position: absolute;
    top: 0;
    right: -5px;
  }
`;

const NotificationListItem = styled.li`
  & > button {
    border: none;
    background: rgba(11, 123, 255, 0.05);
    border-radius: 5px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 7px;
    cursor: pointer;

    &.read {
      background-color: white;
    }

    &:hover {
      background-color: lightgray;
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

        .lead {
          font-weight: bold;
          font-size: 20px;
          line-height: 28px;
          letter-spacing: -0.2px;
        }
      }

      .message {
        text-align: left;
        padding: 5px 0px 10px 0px;
      }
    }
    & > div.vertical {
      width: 10px;
      min-height: 120px;
      background-color: rgba(11, 123, 255, 1);
      border-radius: 5px 0px 0px 5px;

      .fill {
        width: 100%;
        height: 100%;
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

export {
  NotificationContainer,
  NotificationListItem,
  NotificationDropdownContainer,
};
