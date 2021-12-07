import React from "react";

const ProfileItem = (props) => {
  return (
    <li className={props.className}>
      <button>
        <img src={props.icon} className="profile-dropdown__item-icon" />
        <p>{props.title}</p>
      </button>
    </li>
  );
};

export default ProfileItem;
