import React, { Component } from "react";

export default class Timer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			seconds: 0,
			isTiming: false
		};
	}

	startTimer = e => {
		this.setState({
			isTiming: true
		});
		this.timer = setInterval(() => {
			let newSeconds = this.state.seconds + 1;
			this.setState({
				seconds: newSeconds
			});
		}, 1000);
	};

	pauseTimer = e => {
		clearInterval(this.timer);
		this.setState({
			isTiming: false
		});
	};

	endTimer = e => {
		clearInterval(this.timer);
		this.setState({
			isTiming: false,
			seconds: 0
		});
		this.props.handleTimerComplete(this.state.seconds);
	};

	render() {
		let { seconds, isTiming } = this.state;
		let { handleTimerComplete } = this.props;
		return (
			<div>
				<h2>{seconds}</h2>
				{isTiming ? (
					<button onClick={this.pauseTimer}>Pause</button>
				) : (
					<button onClick={this.startTimer}>Start</button>
				)}

				<button onClick={handleTimerComplete}>Finish</button>
			</div>
		);
	}
}
