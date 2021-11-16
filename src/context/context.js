import React from "react";

const Context = React.createContext({
  isLoggedIn: false,
  onLogout: () => {},
  userData: {},
});

export default Context;
