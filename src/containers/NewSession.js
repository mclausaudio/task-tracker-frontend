import React, { Component } from "react";
import { connect } from "react-redux";
import Timer from "../components/Timer";
import NewSessionForm from "../components/NewSessionForm";

import { postNewSession } from "../store/actions/sessions";
import { fetchOneActivity } from "../store/actions/activities";

import { secondsConverter } from "../services/secondsConverters";

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
		// this.props.fetchOneActivity(newSession.userId, newSession.activityId);
		this.props.history.push(
			`/users/${this.props.match.params.id}/activities/${
				this.props.match.params.activity_id
			}`
		);
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
							<h1>Final Duration: {secondsConverter(seconds)}</h1>
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
	{ postNewSession, fetchOneActivity }
)(NewSession);
