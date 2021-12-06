import React from "react";
import { useTheme } from "styled-components";

import {
  HeaderContainer,
  HeaderItem,
} from "../../../styles/Overview/Header/Header.styled";

import Notifications from "./Notifications/Notification";
import Profile from "./Profile/Profile";
import SearchBar from "./SearchBar";

const Header = () => {
  const theme = useTheme();
  const headerColor = theme.colors.colorHeader;

  return (
    <HeaderContainer>
      <HeaderItem headerColor={headerColor} class="header__left-content">
        <h2>August 14</h2>
      </HeaderItem>
      <div class="header__right-content">
        <SearchBar />
        <HeaderItem headerColor={headerColor}>
          <Notifications />
        </HeaderItem>
        <HeaderItem headerColor={headerColor}>
          <Profile />
        </HeaderItem>
      </div>
    </HeaderContainer>
  );
};

export default Header;
