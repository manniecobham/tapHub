import React from 'react';
import './App.css';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'
import Amplify from 'aws-amplify';
import aws_exports from './aws-exports';
import DashBoard from './components/DashBoard'

Amplify.configure(aws_exports);

function App () {

  fetch("https://ibnx4gkcn3.execute-api.us-east-1.amazonaws.com/auth/login", {
    method: 'GET',
    "username": "langyinan",
    "password": "12261226Ll."
    
  })
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  })

  
    return (
      <div className="App">
        <AmplifySignOut />
          <DashBoard>
          </DashBoard>
      </div>
    );
}

export default withAuthenticator(App);