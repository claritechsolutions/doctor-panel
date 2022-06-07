import React, { Component } from "react";
import { Line } from "react-chartjs-2";

const data = {
  labels: ["2015", "2016", "2017", "2018", "2019"],

  datasets: [
    {
      label: "Doctors",
      borderColor: "#bb6697",
      borderWidth: 2,
      borderCapStyle: "round",
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: "miter",
      lineTension: false,
      pointBorderColor: "#bb6697",
      pointBackgroundColor: "#bb6697",
      pointBorderWidth: 5,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "#bb6697",
      pointHoverBorderColor: "#bb6697",
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 50,
      fill: false,
      gridLines: false,
      data: [100, 20, 90, 50, 120],
    },
    {
      label: "Patients",
      borderColor: "#ffba00",
      borderWidth: 2,
      borderCapStyle: "round",
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: "miter",
      lineTension: false,
      pointBorderColor: "#ffba00",
      pointBackgroundColor: "#ffba00",
      pointBorderWidth: 5,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "#ffba00",
      pointHoverBorderColor: "#ffba00",
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      fill: false,
      gridLines: false,
      data: [30, 60, 120, 80, 150],
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
