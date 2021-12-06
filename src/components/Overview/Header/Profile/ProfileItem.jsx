import React from "react";

import {
  ProfileIcon,
  ProfileListItem,
} from "../../../../styles/Overview/Header/Profile/Profile.styled";

const ProfileItem = (props) => {
  return (
    <ProfileListItem>
      <button>
        <ProfileIcon src={props.icon} />
        <p>{props.title}</p>
      </button>
    </ProfileListItem>
  );
};

export default ProfileItem;
