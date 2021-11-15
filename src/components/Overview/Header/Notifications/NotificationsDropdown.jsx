import React from "react";
import DropdownList from "../../../../styles/Overview/Header/DropdownList.styled";
import NotificationItem from "./NotificationItem";

const NotificationsDropdown = () => {
  return (
    <DropdownList>
      <NotificationItem />
    </DropdownList>
  );
};

export default NotificationsDropdown;
