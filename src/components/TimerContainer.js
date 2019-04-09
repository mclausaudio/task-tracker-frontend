import React, { Component } from "react";

import Timer from "./Timer";

export default class TimerContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			seconds: 0,
			showTimer: true
		};
	}

	// timerComplete = e => {
	// 	e.preventDefault();
	// };

	render() {
		let { seconds, showTimer } = this.state;
		return (
			<div>
				{showTimer ? (
					<Timer handleTimerComplete={this.timerComplete} />
				) : (
					<h1>You worked for {seconds}</h1>
				)}
			</div>
		);
	}
}
