import React from "react";
import { useState, useEffect, useRef } from "react";
import profile from "../../../../images/Overview/profilePhoto.png";
import ProfileDropdown from "./ProfileDropdown";
import Button from "../../../../styles/UI/Button.styled";
import { Dropdown } from "../../../../styles/Overview/Header/Dropdown.styled";
import profileDropdownButton from "../../../../images/Overview/profileDropdownButton.svg";
import { ProfileContainer } from "../../../../styles/Overview/Header/Profile/Profile.styled";

const Profile = () => {
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
    <ProfileContainer ref={ref}>
      <Button onClick={onProfileClick}>
        <img src={profile} alt="photo" />
        <img
          className={`profile__arrow ${
            profileIsShown ? "profile__arrow-active" : ""
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
