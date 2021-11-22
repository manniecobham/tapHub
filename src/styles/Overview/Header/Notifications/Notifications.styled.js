import styled from "styled-components";

const NotificationListItem = styled.li`
  & > button {
    border: none;
    background: rgba(11, 123, 255, 0.05);
    border-radius: 5px;
    width: 100%;
    display: grid;
    grid-template-areas:
      "icon title"
      "icon message";

    .icon {
      grid-area: icon;
    }

    .title {
      grid-area: title;
    }

    .message {
      grid-area: message;
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
