import React from "react";
import jsonResponse from "./api";

const Context = React.createContext({
  userData: jsonResponse,
});

export default Context;

// const Context = React.createContext({
//   isLoggedIn: false,
//   onLogout: () => {},
//   userData: {},
// });
