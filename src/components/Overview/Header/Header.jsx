import React from "react";
import Notifications from "./Notifications/Notification";
import Profile from "./Profile/Profile";
import SearchBar from "./SearchBar";
import HeaderItem from "../../../styles/Overview/Header/HeaderItem.styled";
import HeaderContainer from "../../../styles/Overview/Header/HeaderContainer.styled";
import { useTheme } from "styled-components";

const Header = () => {
  const theme = useTheme();
  const headerColor = theme.colors.colorHeader;

  return (
    <HeaderContainer>
      <HeaderItem headerColor={headerColor}>
        <h2>InstaHub Office</h2>
      </HeaderItem>
      <HeaderItem headerColor={headerColor}>
        <h2>InstaHub Distribution Center</h2>
      </HeaderItem>
      <HeaderItem headerColor={headerColor}>
        <SearchBar />
      </HeaderItem>
      <HeaderItem headerColor={headerColor}>
        <Notifications />
      </HeaderItem>
      <HeaderItem headerColor={headerColor}>
        <Profile />
      </HeaderItem>
    </HeaderContainer>
  );
};

export default Header;
