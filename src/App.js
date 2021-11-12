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
  // <div className="App"><AmplifySignOut /><DashBoard /></div>

  return (
    <ThemeProvider theme={globalTheme}>
      <GlobalStyles />
      <Overview />
    </ThemeProvider>
  );
}

//export default withAuthenticator(App);
export default App;
