import React, { useState } from "react";
import notification from "../../../../images/Overview/notification.svg";
import newNotification from "../../../../images/Overview/newNotification.svg";
import Button from "../../../../styles/UI/Button.styled";
import NotificationsDropdown from "./NotificationsDropdown";
import { Dropdown } from "../../../../styles/Overview/Header/Dropdown.styled";

const Notifications = () => {
  const [notificationsAreShown, setNotificationsAreShown] = useState(false);
  const [hasReadAllNotifications, setHasReadAllNotifications] = useState(false);

  const onNotificationsClick = () => {
    setNotificationsAreShown((prevState) => {
      return !prevState;
    });
  };

  const onReadNotificationsHandler = (everythingHasBeenRead) => {
    setHasReadAllNotifications(everythingHasBeenRead);
  };

  return (
    <React.Fragment>
      <Button onClick={onNotificationsClick}>
        <img src={notification} alt="bell" />
        {!hasReadAllNotifications && <img src={newNotification} alt="new" />}
      </Button>
      <Dropdown>
        {notificationsAreShown && (
          <NotificationsDropdown
            onReadNotifications={onReadNotificationsHandler}
          />
        )}
      </Dropdown>
    </React.Fragment>
  );
};

export default Notifications;
