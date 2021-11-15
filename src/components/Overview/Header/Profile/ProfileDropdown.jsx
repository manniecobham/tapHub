import React from "react";
import DropdownList from "../../../../styles/Overview/Header/DropdownList.styled";
import profileIcon from "../../../../images/profileIcon.png";
import ProfileItem from "./ProfileItem";

const ProfileDropdown = () => {
  return (
    <DropdownList>
      <ProfileItem icon={profileIcon} title="Profile" />
      <ProfileItem icon={profileIcon} title="Profile" />
      <ProfileItem icon={profileIcon} title="Profile" />
      <ProfileItem icon={profileIcon} title="Profile" />
      <ProfileItem icon={profileIcon} title="Profile" />
      <ProfileItem icon={profileIcon} title="Profile" />
    </DropdownList>
  );
};

export default ProfileDropdown;
