import React from "react";
import bulbIcon from "../../../../images/Overview/bulbIcon.svg";
import { NotificationListItem } from "../../../../styles/Overview/Header/Notifications/Notifications.styled";

const NotificationItem = (props) => {
  return (
    <NotificationListItem>
      <button>
        <div className="icon">
          <img src={bulbIcon} alt="image" />
        </div>
        <div className="title">
          <div>
            {props.room} ({props.room})
          </div>
          {props.date}
        </div>
        <div className="message">
          <p>{props.message}</p>
        </div>
      </button>
    </NotificationListItem>
  );
};

export default NotificationItem;
