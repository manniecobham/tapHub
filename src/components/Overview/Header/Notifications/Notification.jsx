import React from "react";
import notification from "../../../../images/Overview/notification.svg";
import newNotification from "../../../../images/Overview/newNotification.svg";
import Button from "../../../../styles/UI/Button.styled";
import NotificationsDropdown from "./NotificationsDropdown";
import { Dropdown } from "../../../../styles/Overview/Header/Dropdown.styled";
import { useState } from "react";

const Notifications = () => {
  const [notificationsAreShown, setNotificationsAreShown] = useState(false);

  const onNotificationsClick = () => {
    setNotificationsAreShown((prevState) => {
      return !prevState;
    });
  };

  return (
    <React.Fragment>
      <Button onClick={onNotificationsClick}>
        <img src={notification} alt="bell" />
        <img src={newNotification} alt="new" />
      </Button>
      <Dropdown>{notificationsAreShown && <NotificationsDropdown />}</Dropdown>
    </React.Fragment>
  );
};

export default Notifications;
