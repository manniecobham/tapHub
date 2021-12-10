import React, { useEffect, useRef, useContext, useState } from "react";
import Context from "../../../../context/context";

import selectionDropdownIcon from "../../../../images/Overview/selectionDropdownIcon.svg";
import SpaceSelectionDropdown from "../../Content/DataType/Spaces/SpaceSelectionDropdown";
import Button from "../../../../styles/UI/Button.styled";
import { Dropdown } from "../../../../styles/Overview/Header/Dropdown.styled";
import { SpaceSelectionContainer } from "../../../../styles/Overview/Content/DataType/Spaces/Spaces.styled";
import { NotificationDropdownContainer } from "../../../../styles/Overview/Header/Notifications/Notifications.styled";

import NotificationItem from "./NotificationItem";

/*
IMPORTANT:
In the future, replace with an API call to update the backend that the notification has been read.
The current structure for the notifications only works for initial API call.

In future, when user clicks on notification, a post request is sent to update the notification
in the backend that it has been read
*/

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
        tem
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

  const ref = useRef();
  const [spaceDropdownIsShown, setSpaceDropdownIsShown] = useState(false);

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      // If the menu is open and the clicked target is not within the menu,
      // then close the menu
      if (
        spaceDropdownIsShown &&
        ref.current &&
        !ref.current.contains(e.target)
      ) {
        setSpaceDropdownIsShown(false);
      }
    };

    document.addEventListener("mousedown", checkIfClickedOutside);

    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [spaceDropdownIsShown]);

  const onSpaceSelectionClick = () => {
    setSpaceDropdownIsShown((prevState) => {
      return !prevState;
    });
  };

  return (
    <NotificationDropdownContainer className="notifications-dropdown">
      <SpaceSelectionContainer ref={ref}>
        <Button onClick={onSpaceSelectionClick}>
          <h2>InstaHub Office</h2>
          <img src={selectionDropdownIcon} alt="^" />
        </Button>
        <Dropdown>
          {spaceDropdownIsShown && <SpaceSelectionDropdown />}
        </Dropdown>
      </SpaceSelectionContainer>
      <hr />
      <ul className="notifications-dropdown__list">{Notifications}</ul>
    </NotificationDropdownContainer>
  );
};

export default NotificationsDropdown;
