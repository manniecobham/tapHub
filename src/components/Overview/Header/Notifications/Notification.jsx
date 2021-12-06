import React, { useState, useEffect, useRef } from "react";

import notification from "../../../../images/Overview/notification.svg";
import newNotification from "../../../../images/Overview/newNotification.svg";
import Button from "../../../../styles/UI/Button.styled";
import { Dropdown } from "../../../../styles/Overview/Header/Dropdown.styled";
import { NotificationContainer } from "../../../../styles/Overview/Header/Notifications/Notifications.styled";

import NotificationsDropdown from "./NotificationsDropdown";

const Notifications = () => {
  const ref = useRef();
  const [notificationsAreShown, setNotificationsAreShown] = useState(false);
  const [hasReadAllNotifications, setHasReadAllNotifications] = useState(false);

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (
        notificationsAreShown &&
        ref.current &&
        !ref.current.contains(e.target)
      ) {
        setNotificationsAreShown(false);
      }
    };

    document.addEventListener("mousedown", checkIfClickedOutside);

    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [notificationsAreShown]);

  const onNotificationsClick = () => {
    setNotificationsAreShown((prevState) => {
      return !prevState;
    });
  };

  const onReadNotificationsHandler = (everythingHasBeenRead) => {
    setHasReadAllNotifications(everythingHasBeenRead);
  };

  return (
    <NotificationContainer ref={ref}>
      <Button onClick={onNotificationsClick}>
        <img src={notification} alt="bell" />
        {!hasReadAllNotifications && (
          <img
            className="notification__new--alert"
            src={newNotification}
            alt="new"
          />
        )}
      </Button>
      <Dropdown>
        {notificationsAreShown && (
          <NotificationsDropdown
            onReadNotifications={onReadNotificationsHandler}
          />
        )}
      </Dropdown>
    </NotificationContainer>
  );
};

export default Notifications;
