import React, { Component } from "react";
import { connect } from "react-redux";
import Timer from "../components/Timer";
import NewSessionForm from "../components/NewSessionForm";

import { postNewSession } from "../store/actions/sessions";

class NewSession extends Component {
	constructor(props) {
		super(props);
		this.state = {
			seconds: 0,
			showTimer: true
		};
	}

	handleTimerComplete = seconds => {
		this.setState({
			seconds,
			showTimer: false
		});
	};

	handleSessionSubmit = (notes, privateStatus) => {
		let newSession = {
			totalTimeSpent: this.state.seconds,
			isPrivate: privateStatus,
			notes,
			activityId: this.props.match.params.activity_id,
			userId: this.props.match.params.id
		};
		this.props.postNewSession(newSession);
		this.props.history.push("/dashboard");
		// the below redirect wasn't working, goes to the appropriate activity but doesn't display the new one
		// I think because reacts redirect is faster than the actual new activity being saved into DB
		// `/users/${this.props.match.params.id}/activities/${
		// 	this.props.match.params.activity_id
		// }`;
	};

	render() {
		let { seconds, showTimer } = this.state;
		return (
			<div>
				<h1>New Session</h1>
				<div>
					{showTimer ? (
						<Timer timerComplete={this.handleTimerComplete} />
					) : (
						<div>
							<h1>Final Duration: {seconds}</h1>
							<NewSessionForm
								sessionSubmit={this.handleSessionSubmit}
							/>
						</div>
					)}
				</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		currentUser: state.currentUser,
		activities: state.activities,
		errors: state.errors
	};
}

export default connect(
	mapStateToProps,
	{ postNewSession }
)(NewSession);
