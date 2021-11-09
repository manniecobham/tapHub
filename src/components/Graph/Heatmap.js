import React, { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";


const HeatMap = () => {

  const initialState = {
    series: [
    {
      name: "Series 1",
      data: [{
        x: 'W1',
        y: 22
      }, {
        x: 'W2',
        y: 29
      }, {
        x: 'W3',
        y: 13
      }, {
        x: 'W4',
        y: 32
      }]
    },
    {
      name: "Series 2",
      data: [{
        x: 'W1',
        y: 43
      }, {
        x: 'W2',
        y: 23
      }, {
        x: 'W3',
        y: 5
      }, {
        x: 'W4',
        y: 33
      }]
    }
  ],

    options: {
      chart: {
        height: 350,
        type: 'heatmap',
      },
      plotOptions: {
        heatmap: {
          shadeIntensity: 0.5,
          radius: 0,
          useFillColorAsStroke: true,
          colorScale: {
            ranges: [{
              from: 0,
              to: 13,
              name: 'low',
              color: '#00A100'
            },
              {
                from: 14,
                to: 26,
                name: 'medium',
                color: '#128FD9'
              },
              {
                from: 26,
                to: 39,
                name: 'high',
                color: '#FFB200'
              },
              {
                from: 39,
                to: 50,
                name: 'extreme',
                color: '#FF0000'
              }
            ]
          }
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        width: 1
      },
      title: {
        text: ''
      },
    },
  };

  const [heatMap, setHeatMap] = useState(initialState)

  return (
    <div id="chart">
      <ReactApexChart 
      options={heatMap.options} 
      series={heatMap.series} 
      type="heatmap" 
      height={350}/>
    </div>
  );
};



  //  generateData(data) {
  //    this.series = ''
  //   // Get feature values
  //   var newArr = [];
  //   newArr = data.map (item => item[2]);

  //   // Get date values
  //   var newDateArr = []
  //   newDateArr = data.map(item => (item[0]))
  //   date.push(newDateArr.filter((v, i, a) => a.indexOf(v) === i));
  //   console.log('unique date values are', date); 

  //   if (data.length !== 0) {
  //     for (let i = 0; i <= 23; i++) {
  //       // console.log(data[i])
  //       // arr.push([i, object[i].object.map(item => item[2]))
  //       arr.push([i,newArr[i]]);
       
  //     }
  //   }
  //   const state = [];
  //   date[0].forEach(item=>{
  //     state.push({
  //       name: item,
  //       data: arr
  //     })
  //   })
  //   console.log('state', state);
  //   console.log('date', date);
  //   this.setState({
  //     series: state
  //   });
    
  // };

  
  // componentDidMount = () => {
  //   this.generateData(this.props.data);
  // };

export default HeatMap;