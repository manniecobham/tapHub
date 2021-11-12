import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/GlobalStyles.styled";
import globalTheme from "./styles/GlobalTheme";
//import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'
//import Amplify from 'aws-amplify';
//import aws_exports from './aws-exports';
import Overview from "./views/Overview";
import "./_utilities.css";

//Amplify.configure(aws_exports);

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
  return (
    <ThemeProvider theme={globalTheme}>
      <GlobalStyles />
      <Overview />
    </ThemeProvider>
  );

}

//export default withAuthenticator(App);
export default App;
