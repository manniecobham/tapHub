import React, { useState, useEffect } from 'react'

// images
import addIcon from '../../../images/Analytics/plusIcon.svg';
import downloadIcon from '../../../images/Analytics/downloadIcon.svg';

// components
import { Container } from './AnalyticsComponent.styled'
import { Card } from '../../../styles/UI/Card.styled';
import SensorComponent from './SensorComponent/SensorComponent';

import { data4, data5, data6 } from "../../Overview/Content/DataType/Graph/heatData";

import Graph from './AnalyticsGraphComponents/Graph';
import GraphButtons from './AnalyticsGraphComponents/GraphButtons';

// import GraphButton from './AnalyticsGraphComponents2/GraphButton';
// import Graph from './AnalyticsGraphComponents2/Graph'
// import Graph from '../../Overview/Content/DataType/Graph/Graph'
const jsonRequest = {
    username: "testuser",
    userToken: "12345",
    spaceId: 1,
    roomId: 1,
    dateStart: "2020-11-23",
    dateEnd: "2020-11-03",
    //based on id of sensor
    type: 1,
};

// ID 1 = space utilization
// ID 2 = temperature
// ID 3 = light
const jsonResponse = {
    graphMetrics: [
        {
            id: 1,
            title: "Space Utilization",
            tabData: {
                // currPercentOccupied
                value1: 52,
                // relChangePerDay
                value2: 2.1,
            },
            graphData: data4,
        },
        {
            id: 2,
            title: "Temperature",
            tabData: {
                // currAvgTemp
                value1: 65,
                // relChangePerDay
                value2: 4.1,
            },
            graphData: data5,
        },
        {
            id: 3,
            title: "Light Usage",
            tabData: {
                // currAvgMinPerMonth
                value1: 10,
                // relChangePerMonth
                value2: 3,
            },
            graphData: data6,
        },
        {
            id: 4,
            title: "Humidity",
            tabData: {
                // currAvg
                value1: 45,
                // comfortLevel
                value2: "Comfortable",
            },
            graphData: data5,
        },
        {
            id: 5,
            title: "Pressure",
            tabData: {
                // currAvg
                value1: 70,
                // pressureLevel
                value2: "Normal",
            },
            graphData: data6,
        },
    ],
};

function AnalyticsComponent() {
    const [graphData, setGraphData] = useState(data5);
    const [graphType, setGraphType] = useState("line");

    //need state for tracking active sensors inside of analytics component
    const [active, setActive] = useState(true);

    //create function to pass as props to sensor component allowing to change state
    const setActiveSensor = (id) => {
        //set the active state for a specific id
    }
    const sensors = jsonResponse.graphMetrics;

    return (        
        <Container className="analytics-container">
            <div className="comparison">
                <div className="comparison__rooms">
                    <div className="room">
                        Room 117
                    </div>
                    <div className="add-room">
                        <img src={addIcon} alt="add icon" />
                        Add Comparison
                    </div>
                </div>

                <div className="comparison__datepicker-download">
                    <div className="picker">
                        Date picker goes here
                    </div>
                    <div className="download">
                        <img src={downloadIcon} alt="download icon" />
                    </div>
                </div>
            </div>

            <div className="sensors">
                {sensors.map((sensor, id) => (
                    <SensorComponent 

                        setActiveSensor={setActiveSensor} 
                        // active={active} 
                        sensor={sensor} 
                        setGraphData={setGraphData} 
                        sensors={sensors} 
                        key={id} 
                        id={id} 
                    />
                ))}
            </div>

            <div className="analysis">
                <Card className="card analysis__graph analytics-card">
                    <div style={{display:"flex", justifyContent:"right", paddingTop:"10px"}}>
                        <GraphButtons setGraphType={setGraphType} />
                    </div>
                    <div>
                        <Graph graphData={graphData} graphType={graphType}/>
                    </div>
                </Card>
                <Card className="card analysis__performance analytics-card">
                    Comparison goes here
                </Card>
                <Card className="card analysis__dropdown analytics-card">
                    Other dropdown goes here
                </Card>
                <Card className="card analysis__floor analytics-card">
                    Floor plan goes here
                </Card>
            </div>
        </Container>
    )
}

export default AnalyticsComponent;
