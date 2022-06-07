import React, { Component } from "react";
import { Line } from "react-chartjs-2";

const data = {
  labels: ["2013", "2014", "2015", "2016", "2017", "2018", "2019"],

  datasets: [
    {
      label: "status1",

      borderColor: "#ff0034",
      borderWidth: 2,
      borderCapStyle: "round",
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: "miter",
      lineTension: false,
      pointBorderColor: "#ff0034",
      pointBackgroundColor: "#ff0034",
      pointBorderWidth: 5,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "#ff0034",
      pointHoverBorderColor: "#ff0034",
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 50,
      fill: false,
      gridLines: false,
      data: [65, 59, 80, 81, 56, 55, 40, 60],
    },
    {
      label: "status2",

      borderColor: "#080c14",
      borderWidth: 2,
      borderCapStyle: "round",
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: "miter",
      lineTension: false,
      pointBorderColor: "#080c14",
      pointBackgroundColor: "#080c14",
      pointBorderWidth: 5,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "#080c14",
      pointHoverBorderColor: "#080c14",
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
