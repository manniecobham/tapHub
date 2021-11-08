import React from "react";
import "./App.css";
//import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'
//import Amplify from 'aws-amplify';
//import aws_exports from './aws-exports';
import DashBoard from "./components/DashBoard";

//Amplify.configure(aws_exports);

function App() {
  // <div className="App"><AmplifySignOut /><DashBoard /></div>

  return (
    <div className="App">
      <DashBoard>
        <h1>hello</h1>
      </DashBoard>
    </div>
  );
}

//export default withAuthenticator(App);
export default App;
