import React from "react";
import Dropdown from "../../../../styles/Overview/Header/Dropdown.styled";
import profileIcon from "../../../../images/profileIcon.png";
import ProfileItem from "./ProfileItem";

const ProfileDropdown = () => {
  return (
    <Dropdown>
      <ProfileItem icon={profileIcon} title="Profile" />
      <ProfileItem icon={profileIcon} title="Profile" />
      <ProfileItem icon={profileIcon} title="Profile" />
      <ProfileItem icon={profileIcon} title="Profile" />
      <ProfileItem icon={profileIcon} title="Profile" />
      <ProfileItem icon={profileIcon} title="Profile" />
    </Dropdown>
  );
};

export default ProfileDropdown;
