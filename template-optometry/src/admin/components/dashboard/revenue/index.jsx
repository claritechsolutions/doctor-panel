import React, {Component} from 'react';
import { Line } from 'react-chartjs-2';

const data = {
    labels: ['2013', '2014', '2015', '2016', '2017', '2018', '2019'],
  
    datasets: [
      {
        label: 'Revenue',
        borderColor: "#ffba00",
        borderWidth: 2,
        borderCapStyle: 'round',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        lineTension: false,
        pointBorderColor: '#ffba00',
        pointBackgroundColor: '#ffba00',
        pointBorderWidth: 5,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: '#ffba00',
        pointHoverBorderColor: '#ffba00',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        backgroundColor: "rgb(231, 192, 88)",
        pointHitRadius: 50,
        fill: true,
        gridLines: false,
        data: [60, 100, 240, 120, 80, 100,300],
      }
    
     
    ]
  };
  ;

export default class RevenueChart extends Component {
   
  render() {

    return (
      <div>
        
        <Line ref="chart" data={data} />
      </div>
    );
  }

  componentDidMount() {
    const { datasets } = this.refs.chart.chartInstance.data
  
  }
}