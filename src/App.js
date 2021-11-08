import React from "react";
import "./App.css";
//import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'
//import Amplify from 'aws-amplify';
//import aws_exports from './aws-exports';
import Dashboard from "./components/Dashboard/Dashboard";
import "./_config.css";
import "./_utilities.css";

//Amplify.configure(aws_exports);

function App() {
  // <div className="App"><AmplifySignOut /><DashBoard /></div>

  return (
    <React.Fragment>
      <Dashboard />
    </React.Fragment>
  );
}

//export default withAuthenticator(App);
export default App;
