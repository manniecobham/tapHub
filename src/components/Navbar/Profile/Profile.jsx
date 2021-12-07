import React, { useState, useEffect, useRef } from "react";

import profile from "../../../images/Overview/profilePhoto.png";
import profileDropdownButton from "../../../images/Overview/profileDropdownButton.svg";
import Button from "../../../styles/UI/Button.styled";
import { ProfileContainer } from "../../../styles/Navbar/Profile/Profile.styled";
import { Dropdown } from "../../../styles/Navbar/Dropdown.styled";

import ProfileDropdown from "./ProfileDropdown";

const Profile = (props) => {
  const ref = useRef();
  const [profileIsShown, setProfileIsShown] = useState(false);

  // https://www.codingdeft.com/posts/react-on-click-outside/
  // https://developer.mozilla.org/en-US/docs/Web/API/Node/contains
  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      // If the menu is open and the clicked target is not within the menu,
      // then close the menu
      if (profileIsShown && ref.current && !ref.current.contains(e.target)) {
        setProfileIsShown(false);
      }
    };

    document.addEventListener("mousedown", checkIfClickedOutside);

    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [profileIsShown]);

  const onProfileClick = () => {
    setProfileIsShown((prevState) => {
      return !prevState;
    });
  };

  return (
    <ProfileContainer ref={ref} className={`profile ${props.className}`}>
      <Button onClick={onProfileClick} className="profile__button">
        <img src={profile} alt="photo" className="profile__button-photo" />
        <img
          className={`profile__button-arrow ${
            profileIsShown ? "profile__button-arrow-active" : ""
          }`}
          src={profileDropdownButton}
          alt="^"
        />
      </Button>
      <Dropdown>{profileIsShown && <ProfileDropdown />}</Dropdown>
    </ProfileContainer>
  );
};

export default Profile;
