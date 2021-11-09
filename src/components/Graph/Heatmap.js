import React from "react";
import ReactApexChart from "react-apexcharts";


  const date = []
  const arr = [];
 

class HeatMap extends React.Component {
  constructor(props) {
    super(props);
    this.generateData = this.generateData.bind(this);
  

    this.state = {
      series: '',
  
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
                from: 70,
                to: 71,
                name: 'low',
                color: '#00A100'
              },
                {
                  from: 71,
                  to: 72,
                  name: 'medium',
                  color: '#128FD9'
                },
                {
                  from: 72,
                  to: 73,
                  name: 'high',
                  color: '#FFB200'
                },
                {
                  from: 73,
                  to: 74,
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
  };

   generateData(data) {
     this.series = ''
    // Get feature values
    var newArr = [];
    newArr = data.map (item => item[2]);

    // Get date values
    var newDateArr = []
    newDateArr = data.map(item => (item[0]))
    date.push(newDateArr.filter((v, i, a) => a.indexOf(v) === i));
    console.log('unique date values are', date); 

    if (data.length !== 0) {
      for (let i = 0; i <= 23; i++) {
        // console.log(data[i])
        // arr.push([i, object[i].object.map(item => item[2]))
        arr.push([i,newArr[i]]);
       
      }
    }
    const state = [];
    date[0].forEach(item=>{
      state.push({
        name: item,
        data: arr
      })
    })
    console.log('state', state);
    console.log('date', date);
    this.setState({
      series: state
    });
    
  };

  
  componentDidMount = () => {
    this.generateData(this.props.data);
  };

  render() {
    return (
      <div id="chart">
        <ReactApexChart options={this.state.options} series={this.state.series} type="heatmap" height={350}/>
      </div>
    );
  }
}

export default HeatMap;