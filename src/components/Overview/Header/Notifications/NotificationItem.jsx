import React, { useState } from "react";
import bulbIcon from "../../../../images/Overview/bulbIcon.svg";
import { NotificationListItem } from "../../../../styles/Overview/Header/Notifications/Notifications.styled";

const NotificationItem = (props) => {
  const [hasBeenRead, setHasBeenRead] = useState(false);

  const onReadHandler = () => {
    setHasBeenRead(true);
  };

  return (
    <NotificationListItem className={hasBeenRead ? "read" : ""}>
      <button onClick={onReadHandler}>
        <div className="icon">
          <img src={bulbIcon} alt="image" />
        </div>
        <div className="content">
          <div className="title">
            <div>
              {props.room} ({props.room})
            </div>
            {props.date}
          </div>
          <div className="message">
            <p>{props.message}</p>
          </div>
        </div>
      </button>
    </NotificationListItem>
  );
};

export default NotificationItem;
