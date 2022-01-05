import React, { useState } from 'react'

import { data4, data5, data6 } from "../Overview/Content/DataType/Graph/heatData";

// components
import { Container } from './AnalyticsComponent.styled'
import SensorComponent from './AnalyticsSensors/SensorComponent';
// import SensorComponent from './AnalyticsSensors/Sensors/Sensors';

import AnalyticsHeader from './AnalyticsHeader/AnalyticsHeader';
import AnalyticsCards from './AnalyticsCards/AnalyticsCards';

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
            description: "Room Average",
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
            description: "Room Average",
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
            description: "Waste Percentage",
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
            description: "Room Average",
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
            description: "Room Average",
            graphData: data6,
        },
    ],
};

function AnalyticsComponent() {
    const [graphData, setGraphData] = useState(data5);

    const sensors = jsonResponse.graphMetrics;

    return (        
        <Container className="analytics-container">
            <AnalyticsHeader />
            <SensorComponent sensors={sensors} setGraphData={setGraphData} />
            <AnalyticsCards graphData={graphData} />
        </Container>
    )
}

export default AnalyticsComponent;
