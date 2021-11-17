import React from "react";
import { DropdownList } from "../../../../styles/Overview/Header/Dropdown.styled";
import profileIcon from "../../../../images/profileIcon.png";
import ProfileItem from "./ProfileItem";

const ProfileDropdown = () => {
  return (
    <DropdownList>
      <ProfileItem icon={profileIcon} title="Profile" />
      <ProfileItem icon={profileIcon} title="Tags" />
      <ProfileItem icon={profileIcon} title="Connections" />
      <ProfileItem icon={profileIcon} title="Privacy" />
      <ProfileItem icon={profileIcon} title="Settings" />
      <ProfileItem icon={profileIcon} title="Log out" />
    </DropdownList>
  );
};

export default ProfileDropdown;
