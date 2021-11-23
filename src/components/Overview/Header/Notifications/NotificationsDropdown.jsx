import React, { useContext, useState } from "react";
import Context from "../../../../context/context";
import { DropdownList } from "../../../../styles/Overview/Header/Dropdown.styled";
import { NotificationDropdownContainer } from "../../../../styles/Overview/Header/Notifications/Notifications.styled";
import NotificationItem from "./NotificationItem";

const NotificationsDropdown = (props) => {
  const context = useContext(Context);
  const userNotifications = context.userData.notifications;
  const [allNotificationsHaveBeenRead, setAllNotificationsHaveBeenRead] =
    useState(false);
  const Notifications = [];
  const readNotification = (id) => {
    let everythingHasBeenRead = true;
    for (const notification of userNotifications) {
      if (notification.id === id) {
        notification.read = true;
        console.log(userNotifications);
      }
      if (!notification.read) {
        everythingHasBeenRead = false;
      }
    }
    props.onReadNotifications(everythingHasBeenRead);
  };
  for (const notification of userNotifications) {
    Notifications.push(
      <NotificationItem
        key={notification.id}
        id={notification.id}
        message={notification.msg}
        date={notification.date}
        room={notification.room}
        alertType={notification.alertType}
        read={notification.read}
        readNotification={readNotification}
      />
    );
  }

  return (
    <NotificationDropdownContainer>
      <h3>InstaHub Building</h3>
      <hr />
      <ul>{Notifications}</ul>
    </NotificationDropdownContainer>
  );
};

export default NotificationsDropdown;
