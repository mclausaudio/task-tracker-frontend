import React, { Component } from "react";
import { Bar, Line } from "react-chartjs-2";

export default class extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: {}
		};
	}

	render() {
		console.log(this.props.dateArray);
		console.log(this.props.timeArray);
		let data = {
			data: {
				labels: this.props.dateArray.reverse(),
				datasets: [
					{
						label: "Time to nearest minute",
						data: this.props.timeArray.reverse()
					}
				]
			},
			options: {
				scales: {
					yAxes: [
						{
							type: "time",
							time: {
								unit: "second",
								displayFormats: {
									minute: "mm:ss"
								}
							},
							ticks: {
								beginAtZero: true,
								min: 0
							}
						}
					]
				}
			}
		};
		return <Line data={data.data} height={100} />;
	}
}
