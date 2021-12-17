import React from 'react'

// images
import addIcon from '../../../images/Analytics/plusIcon.svg';
import downloadIcon from '../../../images/Analytics/downloadIcon.svg';

// components
import { Container } from './GraphCard.styled'
import { Card } from '../../../styles/UI/Card.styled';
import SensorComponent from './SensorComponent/SensorComponent';


const jsonResponse = {
    data: {
        // graph data created by BACKEND between start and end date
    },
    // graph sidebar data created by BACKEND between start and end date
    graphMetrics: [
        {
            title: "Space Utilization",
            data: {
                // currPercentOccupied
                value1: 52,
                // relChangePerDay
                value2: 2.1,
            },
        },
        {
            title: "Temperature",
            data: {
                // currAvgTemp
                value1: 65,
                // relChangePerDay
                value2: 4.1,
            },
        },
        {
            title: "Light Usage",
            data: {
                // currAvgMinPerMonth
                value1: 10,
                // relChangePerMonth
                value2: 3,
            },
        },
        {
            title: "Humidity",
            data: {
                // currAvg
                value1: 45,
                // comfortLevel
                value2: "Comfortable",
            },
        },
        {
            title: "Pressure",
            data: {
                // currAvg
                value1: 70,
                // pressureLevel
                value2: "Normal",
            },
        },
    ],
    };

function GraphCard() {

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
                {sensors.map((sensor) => (
                    <SensorComponent sensor={sensor}/>
                ))}
            </div>

            <div className="analysis">
                <Card className="card analysis__graph analytics-card">
                    Graph goes here
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

export default GraphCard;
