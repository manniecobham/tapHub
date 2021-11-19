import React, { useState, useReducer } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/GlobalStyles.styled";
import globalTheme from "./styles/GlobalTheme";
//import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'
//import Amplify from 'aws-amplify';
//import aws_exports from './aws-exports';
import Overview from "./views/Overview";
import Analytics from "./views/Analytics";
import Reports from "./views/Reports";
import Sensors from "./views/Sensors";
import Property from "./views/Property";
//Amplify.configure(aws_exports);
import { Route, Routes, Navigate } from "react-router-dom";
import Context from "./context/context";
import jsonResponse from "./context/api";

const initialState = {
  overview: "inactive",
  analytics: "inactive",
  reports: "inactive",
  sensors: "inactive",
  property: "inactive",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "overview":
      return {
        overview: "active",
        analytics: "inactive",
        reports: "inactive",
        sensors: "inactive",
        property: "inactive",
      };
    case "analytics":
      return {
        overview: "inactive",
        analytics: "active",
        reports: "inactive",
        sensors: "inactive",
        property: "inactive",
      };
    case "reports":
      return {
        overview: "inactive",
        analytics: "inactive",
        reports: "active",
        sensors: "inactive",
        property: "inactive",
      };
    case "sensors":
      return {
        overview: "inactive",
        analytics: "inactive",
        reports: "inactive",
        sensors: "active",
        property: "inactive",
      };
    case "property":
      return {
        overview: "inactive",
        analytics: "inactive",
        reports: "inactive",
        sensors: "inactive",
        property: "active",
      };
    default:
      console.log(action);
  }
};

function App() {
  // let a = 0;

  //   fetch("https://ibnx4gkcn3.execute-api.us-east-1.amazonaws.com/auth/login", {
  //     method: 'GET',
  //     "username": "langyinan",
  //     "password": "12261226Ll."

  //   })
  //   .then((response) => {
  //     console.log(response);
  //     a = response.headers
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   })
  // <div className="App">
  //   <AmplifySignOut />
  //     <DashBoard>
  //     </DashBoard>
  // </div>

  const [activePages, dispatchActivePages] = useReducer(reducer, initialState);

  const logoutHandler = () => {
    return "HELLO WORLD";
  };

  const [userIsLoggedIn, setUserIsLoggedIn] = useState(true);
  const [userData, setUserData] = useState(jsonResponse);

  return (
    <Context.Provider
      value={{
        isLoggedIn: userIsLoggedIn,
        onLogout: logoutHandler,
        userData: userData,
        activePages: activePages,
        dispatchActivePages: dispatchActivePages,
      }}
    >
      <ThemeProvider theme={globalTheme}>
        <GlobalStyles />
        <Routes>
          <Route path="/overview" element={<Overview />} />
          <Route path="/" element={<Navigate replace to="/overview" />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/sensors" element={<Sensors />} />
          <Route path="/property" element={<Property />} />
        </Routes>
      </ThemeProvider>
    </Context.Provider>
  );
}

//export default withAuthenticator(App);
export default App;
