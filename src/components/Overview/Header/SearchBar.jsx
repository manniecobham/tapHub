import React from "react";

import searchIcon from "../../../images/Overview/searchIcon.svg";
import { SearchForm } from "../../../styles/Overview/Header/SearchBar.styled";

const SearchBar = (props) => {
  return (
    <SearchForm action="" className={`search-form ${props.className}`}>
      <input
        type="text"
        placeholder="Search ..."
        name="search"
        className="search-form__input"
      />
      <button type="submit" className="search-form__button">
        <img src={searchIcon} alt="?" className="search-form__button-icon" />
      </button>
    </SearchForm>
  );
};

export default SearchBar;
