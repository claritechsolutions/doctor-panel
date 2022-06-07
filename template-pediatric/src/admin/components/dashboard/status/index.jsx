import React, { Component } from "react";
import { Line } from "react-chartjs-2";

const data = {
  labels: ["2013", "2014", "2015", "2016", "2017", "2018", "2019"],

  datasets: [
    {
      label: "Doctors",
      borderColor: "#122852",
      borderWidth: 2,
      borderCapStyle: "round",
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: "miter",
      lineTension: false,
      pointBorderColor: "#122852",
      pointBackgroundColor: "#122852",
      pointBorderWidth: 5,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "#122852",
      pointHoverBorderColor: "#122852",
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 50,
      fill: false,
      gridLines: false,
      data: [65, 59, 80, 81, 56, 55, 40, 60],
    },
    {
      label: "Patients",
      borderColor: "#fe235b",
      borderWidth: 2,
      borderCapStyle: "round",
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: "miter",
      lineTension: false,
      pointBorderColor: "#fe235b",
      pointBackgroundColor: "#fe235b",
      pointBorderWidth: 5,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "#fe235b",
      pointHoverBorderColor: "#fe235b",
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
