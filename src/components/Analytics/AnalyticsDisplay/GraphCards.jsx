import React from 'react'
// import  Body  from './GraphCard.styled'
import { Container } from './GraphCard.styled'

function GraphCard() {
    return (        
        <Container className="analytics-container">
            <div className="analytics-container__sensors">
                <div className="analytics-container__sensors-box">humidity</div>
                <div className="analytics-container__sensors-box">temperature</div>
                <div className="analytics-container__sensors-box">space usage</div>
                <div className="analytics-container__sensors-box">pressure</div>
                <div className="analytics-container__sensors-box">lights</div>
            </div>
            <div className="analytics-container__analysis">
                <div className="analytics-container__analysis-graph">
                    
                </div>
                <div className="analytics-container__analysis-performance">
                    2
                </div>
                <div className="analytics-container__analysis-dropdown">
                    3
                </div>
                <div classname="analytics-container__analysis-floor">
                    4   
                </div>
            </div>
        </Container>
//             <Body> 
//                 <div className="analytics">
//                     <div className="analytics__cards">
//                         <div className="analytics__desc">
//                             <div className="analytics__desc__card">
//                                 <h3>Space Usage</h3>
//                                 <p>Day of the week, Indoor Space Usage (Room 112)</p>
//                                 <h4>Room 117</h4>
//                             </div>
//                             <div className="analytics__desc__btn">
//                                 <a href="#">Avg.</a>
//                                 <a href="#">H & D</a>
//                                 <a href="#">Chart View</a>
//                                 <a href="#">Heatmap View</a>
//                             </div>
//                         </div>
//                         <div className="analytics__cards__img">
//                             <span style={{backgroundColor:'pink', borderRadius:'8px'}}></span>
//                         </div>
//                     </div>
//                     <div className="analytics__comp">
//                         <div className="analytics__comp__room">
//                             <h2>Room Temperaqture Comparison</h2>
//                             <p>The report shows the Comparison of day performance of room 119 and room 327</p>
//                             <div style={{display:'flex', gap: '10px'}}><a href="#" style={{backgroundColor:'grey',textDecoration:'none',padding: '5px',borderRadius: '3px', color:'black'}}>Room 117</a> <p>68%</p><p>21.8%</p></div>
//                         </div>
//                         <div className="analytics__comp__insta">
//                             <h2>InstaHub - Room 117</h2>
//                         </div>
//                     </div>
//                 </div>
//             </Body>
    )
}

export default GraphCard;
