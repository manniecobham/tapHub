import React, { useContext, useState } from "react";
import Context from "../../../../context/context";

import bulbIcon from "../../../../images/Overview/bulbIcon.svg";
import { NotificationListItem } from "../../../../styles/Overview/Header/Notifications/Notifications.styled";

const NotificationItem = (props) => {
  const context = useContext(Context);
  const [hasBeenRead, setHasBeenRead] = useState(props.read);

  const onReadHandler = () => {
    setHasBeenRead(true);
    props.readNotification(props.id);
  };

  return (
    <NotificationListItem className="notif-list">
      <button
        onClick={onReadHandler}
        className={`notif-list__button ${
          hasBeenRead ? "notif-list__button--read" : ""
        }`}
      >
        <div
          className="notif-list__item--vertical"
          style={{
            backgroundColor: hasBeenRead
              ? "rgba(11, 123, 255, 0.1)"
              : "rgba(11, 123, 255, 1)",
          }}
        >
          <div className={`fill`}></div>
        </div>
        <div className="notif-list__item-icon">
          <img src={bulbIcon} alt="image" />
        </div>
        <div className="notif-list__item-content">
          <div className="notif-list__item-content-title">
            <div>
              <span className="lead">
                {props.alertType} ({props.room})
              </span>
            </div>
            {props.date}
          </div>
          <div className="notif-list__item-content-message">
            <p>{props.message}</p>
          </div>
        </div>
      </button>
    </NotificationListItem>
  );
};

export default NotificationItem;
