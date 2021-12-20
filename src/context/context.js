import React from "react";
import jsonResponse from "./api";

const Context = React.createContext({
  username: "",
  authToken: "",
  isAuthenticated: false,
  userData: jsonResponse,
});

export default Context;
