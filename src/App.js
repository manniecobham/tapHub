import React from "react";
import "./App.css";
//import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'
//import Amplify from 'aws-amplify';
//import aws_exports from './aws-exports';
// import Dashboard from "./components/Dashboard/Dashboard";
// import "./_config.css";
// import "./_utilities.css";

//Amplify.configure(aws_exports);

import { data1, data2, data3 } from './components/Graph/lineData'
import { data4, data5, data6 } from './components/Graph/heatData'
import LineChart from "./components/Graph/LineChart";
import HeatMap from "./components/Graph/Heatmap";


function App() {
  // <div className="App"><AmplifySignOut /><DashBoard /></div>

  return (
    <React.Fragment>
      <LineChart data1={data1} data2={data2} data3={data3} />
      <HeatMap data1={data4} data2={data5} data3={data6}/>
      {/* <Dashboard /> */}
    </React.Fragment>
  );
}

//export default withAuthenticator(App);
export default App;