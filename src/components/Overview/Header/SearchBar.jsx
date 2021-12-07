import React from "react";

import searchIcon from "../../../images/Overview/searchIcon.svg";
import { SearchForm } from "../../../styles/Overview/Header/SearchBar.styled";

const SearchBar = (props) => {
  return (
    <SearchForm action="" className={props.className}>
      <input type="text" placeholder="Search ..." name="search" />
      <button type="submit">
        <img src={searchIcon} alt="?" />
      </button>
    </SearchForm>
  );
};

export default SearchBar;
