import React, { Component } from "react";
import TimerContainer from "./TimerContainer";

export default class NewForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: "",
			notes: "",
			isPrivate: false,
			seconds: 0,
			showTimer: true
		};
	}

	handleSubmit = e => {
		alert("handle submit");
	};

	setTime = newCount => {
		this.setState({
			seconds: newCount,
			showTimer: false
		});
	};

	render() {
		let { title, notes, isPrivate, showTimer, seconds } = this.state;
		let { heading } = this.props;
		return (
			<div>
				{showTimer ? (
					<TimerContainer handleTimerComplete={this.timerComplete} />
				) : (
					<h3>You haved worked for {seconds}</h3>
				)}
				<div className="row justify-content-md-center text-center">
					<div className="col-md-6">
						<h2>{heading}</h2>
						<form onSubmit={this.handleSubmit}>
							<label htmlFor="email">title:</label>
							<input
								className="form-control"
								id="title"
								name="title"
								onChange={this.handleChange}
								value={title}
								type="text"
							/>
							<label htmlFor="email">Notes:</label>
							<textarea
								type="text"
								id="notes"
								name="notes"
								className="form-control"
								onChange={this.handleChange}
							/>
							<button
								type="submit"
								className="btn btn-primary btn-block btn-lg"
							>
								Create
							</button>
						</form>
					</div>
				</div>
			</div>
		);
	}
}
