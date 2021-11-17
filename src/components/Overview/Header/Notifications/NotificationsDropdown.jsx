import React, { useContext } from "react";
import Context from "../../../../context/context";
import DropdownList from "../../../../styles/Overview/Header/DropdownList.styled";
import NotificationItem from "./NotificationItem";

const NotificationsDropdown = () => {
  const context = useContext(Context);
  const userNotifications = context.userData.notifications;
  const Notifications = [];
  for (const notification in userNotifications) {
    Notifications.push(
      <NotificationItem message={userNotifications[notification].msg} />
    );
  }

  return <DropdownList>{Notifications}</DropdownList>;
};

export default NotificationsDropdown;
