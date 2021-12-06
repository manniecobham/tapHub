import React from "react";

import profileIcon from "../../../../images/Overview/profileIcon.svg";
import profileTagsIcon from "../../../../images/Overview/profileTagsIcon.svg";
import profileConnectionsIcon from "../../../../images/Overview/profileConnectionsIcon.svg";
import profilePrivacyIcon from "../../../../images/Overview/profilePrivacyIcon.svg";
import profileSettingsIcon from "../../../../images/Overview/profileSettingsIcon.svg";
import profileLogoutIcon from "../../../../images/Overview/profileLogoutIcon.svg";
import { ProfileDropdownList } from "../../../../styles/Overview/Header/Profile/Profile.styled";

import ProfileItem from "./ProfileItem";

const ProfileDropdown = () => {
  return (
    <ProfileDropdownList>
      <ProfileItem icon={profileIcon} title="Profile" />
      <ProfileItem icon={profileTagsIcon} title="Tags" />
      <ProfileItem icon={profileConnectionsIcon} title="Connections" />
      <ProfileItem icon={profilePrivacyIcon} title="Privacy" />
      <ProfileItem icon={profileSettingsIcon} title="Settings" />
      <ProfileItem icon={profileLogoutIcon} title="Log out" />
    </ProfileDropdownList>
  );
};

export default ProfileDropdown;
