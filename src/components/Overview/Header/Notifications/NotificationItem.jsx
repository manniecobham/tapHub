import React from "react";

const NotificationItem = (props) => {
  return (
    <li>
      <button>
        <div>
          <img src="" alt="image" />
        </div>
        <div>
          <div>
            {props.room} ({props.room})
          </div>
          {props.date}
        </div>
        <div>
          <p>{props.message}</p>
        </div>
      </button>
    </li>
  );
};

export default NotificationItem;
