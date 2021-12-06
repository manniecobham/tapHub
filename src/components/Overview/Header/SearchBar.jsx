import React from "react";

import searchIcon from "../../../images/Overview/searchIcon.svg";
import { SearchForm } from "../../../styles/Overview/Header/SearchBar.styled";

const SearchBar = () => {
  return (
    <SearchForm action="">
      <input type="text" placeholder="Search ..." name="search" />
      <button type="submit">
        <img src={searchIcon} alt="?" />
      </button>
    </SearchForm>
  );
};

export default SearchBar;
