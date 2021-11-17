import React, { useState } from "react";
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
import { Route, Routes } from "react-router-dom";
import Context from "./context/context";

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

  const logoutHandler = () => {
    return "HELLO WORLD";
  };

  const [userIsLoggedIn, setUserIsLoggedIn] = useState(true);
  const [userData, setUserData] = useState({
    username: "testuser",
    notifications: {
      1: {
        msg: "Room 105 has a consistent pattern of lighting waste in past 24 hours.",
        date: "Today: 5:27pm",
        room: "Room 105",
        analyticType: "Lighting Waste",
      },
      2: {
        msg: "Room 205 has an irregular pattern of H/C waste in past 48 hours.",
        date: "Today: 7:00am",
        room: "Room 205",
        analyticType: "H/C Waste",
      },
    },
    floors: {
      first: {
        rooms_occupied: 10,
        co2_reduction: 20,
        light_wasted: 50,
        hc_wasted: 200,
        rooms: {
          101: {
            data: {
              //graph data
            },
          },
          102: {
            data: {
              //graph data
            },
          },
        },
      },
    },
  });

  return (
    <Context.Provider
      value={{
        isLoggedIn: userIsLoggedIn,
        onLogout: logoutHandler,
        userData: userData,
      }}
    >
      <ThemeProvider theme={globalTheme}>
        <GlobalStyles />
        <Routes>
          <Route path="/" element={<Overview />} />
          <Route path="/overview" element={<Overview />} />
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
