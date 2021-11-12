import React from "react";
import classes from "./Header.module.css";
import HeaderContent from "./HeaderContent";

const Header = () => {
  return (
    <div className={`${classes.header}`}>
      <HeaderContent />
    </div>
  );
};

export default Header;
