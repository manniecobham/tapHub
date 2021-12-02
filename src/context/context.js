import React from "react";
import jsonResponse from "./api";

const Context = React.createContext({
  userData: {},
});

export default Context;

// const Context = React.createContext({
//   isLoggedIn: false,
//   onLogout: () => {},
//   userData: {},
// });
