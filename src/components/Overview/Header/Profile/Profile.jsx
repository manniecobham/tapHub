import React from "react";
import { useState } from "react";
import profile from "../../../../images/profile.png";
import ProfileDropdown from "./ProfileDropdown";
import Button from "../../../../styles/UI/Button.styled";
import profileDropdownButton from "../../../../images/profileDropdownButton.svg";

const Profile = () => {
  const [profileIsShown, setProfileIsShown] = useState(true);

  const onProfileClick = () => {
    setProfileIsShown((prevState) => {
      return !prevState;
    });
  };

  return (
    <React.Fragment>
      <Button onClick={onProfileClick}>
        <img src={profile} alt="photo" />
        <img src={profileDropdownButton} alt="^" />
      </Button>
      <div style={{ position: "relative" }}>
        {profileIsShown && <ProfileDropdown />}
      </div>
    </React.Fragment>
  );
};

export default Profile;
