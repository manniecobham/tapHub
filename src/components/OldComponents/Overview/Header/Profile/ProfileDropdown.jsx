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
    <ProfileDropdownList className="profile-dropdown">
      <ProfileItem
        icon={profileIcon}
        title="Profile"
        className="profile-dropdown__item"
      />
      <ProfileItem
        icon={profileTagsIcon}
        title="Tags"
        className="profile-dropdown__item"
      />
      <ProfileItem
        icon={profileConnectionsIcon}
        title="Connections"
        className="profile-dropdown__item"
      />
      <ProfileItem
        icon={profilePrivacyIcon}
        title="Privacy"
        className="profile-dropdown__item"
      />
      <ProfileItem
        icon={profileSettingsIcon}
        title="Settings"
        className="profile-dropdown__item"
      />
      <ProfileItem
        icon={profileLogoutIcon}
        title="Log out"
        className="profile-dropdown__item"
      />
    </ProfileDropdownList>
  );
};

export default ProfileDropdown;
