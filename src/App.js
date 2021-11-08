import React from 'react';
import './App.css';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'
import Amplify from 'aws-amplify';
import aws_exports from './aws-exports';
import DashBoard from './components/DashBoard'

Amplify.configure(aws_exports);

function App () {
    return (
      <div className="App">
        <AmplifySignOut />
          <DashBoard>
          </DashBoard>
      </div>
    );
}

export default withAuthenticator(App);