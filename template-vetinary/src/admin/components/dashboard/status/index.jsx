import React, { Component } from "react";
import { Line } from "react-chartjs-2";

const data = {
  labels: ["2013", "2014", "2015", "2016", "2017", "2018", "2019"],

  datasets: [
    {
      label: "status1",

      borderColor: "#f79a6f",
      borderWidth: 2,
      borderCapStyle: "round",
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: "miter",
      lineTension: false,
      pointBorderColor: "#f79a6f",
      pointBackgroundColor: "#f79a6f",
      pointBorderWidth: 5,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "#f79a6f",
      pointHoverBorderColor: "#f79a6f",
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 50,
      fill: false,
      gridLines: false,
      data: [65, 59, 80, 81, 56, 55, 40, 60],
    },
    {
      label: "status2",

      borderColor: "#019b87",
      borderWidth: 2,
      borderCapStyle: "round",
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: "miter",
      lineTension: false,
      pointBorderColor: "#019b87",
      pointBackgroundColor: "#019b87",
      pointBorderWidth: 5,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "#019b87",
      pointHoverBorderColor: "#019b87",
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 50,
      fill: false,
      gridLines: false,
      data: [60, 50, 70, 85, 50, 50, 45, 60],
    },
  ],
};
export default class StatusChart extends Component {
  render() {
    return (
      <div>
        <Line ref="chart" data={data} />
      </div>
    );
  }

  componentDidMount() {
    const { datasets } = this.refs.chart.chartInstance.data;
  }
}
