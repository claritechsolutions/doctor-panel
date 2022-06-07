import React, {Component} from 'react';
import { Line } from 'react-chartjs-2';

const data = {
    labels: ['2013', '2014', '2015', '2016', '2017', '2018', '2019'],
  
    datasets: [
      {
        label: 'Revenue',
        
        borderColor: "#fe235b",
        borderWidth: 2,
        borderCapStyle: 'round',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        lineTension: false,
        pointBorderColor: '#fe235b',
        pointBackgroundColor: '#fe235b',
        pointBorderWidth: 5,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: '#fe235b',
        pointHoverBorderColor: '#fe235b',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        backgroundColor: "#ff7095",
        pointHitRadius: 50,
        fill: true,
        gridLines: false,
        data: [65, 59, 80, 81, 56, 55, 40, 60],
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