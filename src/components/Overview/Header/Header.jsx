import React from "react";
import { useTheme } from "styled-components";

import { HeaderContainer } from "../../../styles/Overview/Header/Header.styled";

import Notifications from "./Notifications/Notification";
import Profile from "./Profile/Profile";
import SearchBar from "./SearchBar";

const Header = (props) => {
  const theme = useTheme();

  return (
    <HeaderContainer className="header">
      <div className="header__left-content">
        <h2 className="header__left-content-item">August 14</h2>
      </div>
      <div className="header__right-content">
        <SearchBar className="header__right-content-item" />
        <Notifications className="header__right-content-item" />
        <Profile className="header__right-content-item" />
      </div>
    </HeaderContainer>
  );
};

export default Header;
