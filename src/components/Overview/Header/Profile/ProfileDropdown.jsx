import React from "react";
import { DropdownList } from "../../../../styles/Overview/Header/Dropdown.styled";
import profileIcon from "../../../../images/Overview/profileIcon.svg";
import profileTagsIcon from "../../../../images/Overview/profileTagsIcon.svg";
import profileConnectionsIcon from "../../../../images/Overview/profileConnectionsIcon.svg";
import profilePrivacyIcon from "../../../../images/Overview/profilePrivacyIcon.svg";
import profileSettingsIcon from "../../../../images/Overview/profileSettingsIcon.svg";
import profileLogoutIcon from "../../../../images/Overview/profileLogoutIcon.svg";
import ProfileItem from "./ProfileItem";

const ProfileDropdown = () => {
  return (
    <DropdownList>
      <ProfileItem icon={profileIcon} title="Profile" />
      <ProfileItem icon={profileTagsIcon} title="Tags" />
      <ProfileItem icon={profileConnectionsIcon} title="Connections" />
      <ProfileItem icon={profilePrivacyIcon} title="Privacy" />
      <ProfileItem icon={profileSettingsIcon} title="Settings" />
      <ProfileItem icon={profileLogoutIcon} title="Log out" />
    </DropdownList>
  );
};

export default ProfileDropdown;
