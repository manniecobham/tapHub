import React, { useEffect, useState } from "react";
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

import Login from "./views/Login";
import Register from "./components/Login/Register";
function App() {
  //const [userIsLoggedIn, setUserIsLoggedIn] = useState(true);
  const [userData, setUserData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://udd7rn11bi.execute-api.us-east-1.amazonaws.com/overview/json"
      );

      if (!response.ok) {
        throw new Error("No data acquired");
      }

      const responseData = await response.json();

      // console.log(JSON.stringify(responseData.body));
      setUserData(responseData.body);
      setIsLoading(false);
      // setTimeout(() => {
      //   setIsLoading(false);
      // }, 2000);
    };

    fetchData().catch((error) => {
      setIsLoading(false);
      // setHttpError(error.message);
    });
  }, []);

  const loadingSpinner = (
    <div className="lds-circle">
      <div></div>
    </div>
  );

  return (
    <Context.Provider
      value={{
        userName: "",
        userToken: "",
        userData: userData,
      }}
    >
      <ThemeProvider theme={globalTheme}>
        <GlobalStyles />
        {isLoading ? (
          loadingSpinner
        ) : (
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Navigate replace to="/login" />} />
            <Route path="/register" element={<Register />} />
            <Route path="/overview" element={<Overview />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/sensors" element={<Sensors />} />
            <Route path="/property" element={<Property />} />
          </Routes>
        )}
      </ThemeProvider>
    </Context.Provider>
  );
}

//export default withAuthenticator(App);
export default App;

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
