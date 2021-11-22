import React, { useContext } from "react";
import Context from "../../../../context/context";
import { DropdownList } from "../../../../styles/Overview/Header/Dropdown.styled";
import { NotificationDropdownContainer } from "../../../../styles/Overview/Header/Notifications/Notifications.styled";
import NotificationItem from "./NotificationItem";

const NotificationsDropdown = () => {
  const context = useContext(Context);
  const userNotifications = context.userData.notifications;
  const Notifications = [];
  for (const notification in userNotifications) {
    Notifications.push(
      <NotificationItem
        message={userNotifications[notification].msg}
        date={userNotifications[notification].date}
        room={userNotifications[notification].room}
        alertType={userNotifications[notification].alertType}
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
