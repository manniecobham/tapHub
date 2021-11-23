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
    <NotificationListItem>
      <button onClick={onReadHandler} className={hasBeenRead ? "read" : ""}>
        <div
          className="vertical"
          style={{
            backgroundColor: hasBeenRead
              ? "rgba(11, 123, 255, 0.1)"
              : "rgba(11, 123, 255, 1)",
          }}
        >
          <div className={`fill`}></div>
        </div>
        <div className="icon">
          <img src={bulbIcon} alt="image" />
        </div>
        <div className="content">
          <div className="title">
            <div>
              <span className="lead">
                {props.room} ({props.room})
              </span>
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
