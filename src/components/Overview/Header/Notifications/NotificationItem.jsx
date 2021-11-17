import React from "react";

const NotificationItem = (props) => {
  return (
    <li>
      <button>
        <p>{props.message}</p>
      </button>
    </li>
  );
};

export default NotificationItem;
