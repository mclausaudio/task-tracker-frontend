import React, { Component } from "react";

import Timer from "./Timer";

import { secondsConverter } from "../services/secondsConverters";

export default class TimerContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			seconds: 0,
			showTimer: true
		};
	}

	render() {
		let { seconds, showTimer } = this.state;
		return (
			<div>
				{showTimer ? (
					<Timer handleTimerComplete={this.timerComplete} />
				) : (
					<h1>You worked for {secondsConverter(seconds)}</h1>
				)}
			</div>
		);
	}
}
