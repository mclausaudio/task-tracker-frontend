import React, { Component } from "react";
import { secondsConverter } from "../services/secondsConverters";

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
		this.props.timerComplete(this.state.seconds);
		this.setState({
			isTiming: false,
			seconds: 0
		});
	};

	render() {
		let { seconds, isTiming } = this.state;

		return (
			<div>
				<h2 className="mb-5">{secondsConverter(seconds)}</h2>
				<div className="btn-group">
					{isTiming ? (
						<button
							onClick={this.pauseTimer}
							className="btn btn-warning"
						>
							Pause
						</button>
					) : (
						<button
							onClick={this.startTimer}
							className="btn btn-primary"
						>
							Start
						</button>
					)}
					<button onClick={this.endTimer} className="btn btn-success">
						Finish
					</button>
				</div>
			</div>
		);
	}
}
