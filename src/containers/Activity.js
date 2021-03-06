import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect, Link } from "react-router-dom";

import SessionCard from "../components/SessionCard";
import SessionEditForm from "../components/SessionEditForm";

import { fetchOneActivity, removeActivity } from "../store/actions/activities";
import { fetchOneSession, deleteSession } from "../store/actions/sessions";
import { removeError } from "../store/actions/errors";
import Chart from "../components/Chart";

import {
	secondsConverter,
	secondsToMinsRounded
} from "../services/secondsConverters";

class Activity extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isEditing: false,
			sessionIdToEdit: null
		};
	}

	renderSessions = () => {
		this.props.fetchOneActivity(
			this.props.match.params.id,
			this.props.match.params.activity_id
		);
	};

	componentDidMount() {
		this.renderSessions();
	}

	toggleEditing = sessionId => {
		let toggle = !this.state.isEditing;
		this.setState({
			isEditing: toggle,
			sessionIdToEdit: sessionId
		});
		this.renderSessions();
	};

	deleteSession = sessionId => {
		this.props.deleteSession(sessionId);
		this.renderSessions();
	};

	render() {
		if (!this.props.activity) {
			return <Redirect to="/dashboard" />;
		}
		let { activity } = this.props;
		let { isEditing } = this.state;
		let totalTime = 0;
		let timeArray = [];
		let dateArray = [];
		let listOfSessions = activity.sessions.reverse().map(s => {
			totalTime += s.totalTimeSpent;
			timeArray.push(secondsToMinsRounded(s.totalTimeSpent));
			dateArray.push(s.createdAt);

			return (
				<SessionCard
					sessionId={s._id}
					activityId={s.activityId}
					createdAt={s.createdAt}
					description={s.notes}
					toggleEditing={this.toggleEditing}
					totalTimeSpent={s.totalTimeSpent}
					deleteSession={this.deleteSession}
				/>
			);
		});
		return (
			<div className="text-center">
				<h1 classNAme="mt-5 mb-5">{activity.title}</h1>
				<Chart timeArray={timeArray} dateArray={dateArray} />
				<h6 className="mb-4">
					The graph's session times are rounded down to nearest
					minute.
				</h6>
				<div className="mt-2 mb-3">
					{isEditing ? (
						<div>
							<SessionEditForm
								userId={this.props.currentUser.user.id}
								activityId={this.props.activity._id}
								sessionId={this.state.sessionIdToEdit}
								toggleEditing={this.toggleEditing}
								renderSessions={this.renderSessions}
							/>
						</div>
					) : (
						<div>
							<Link
								className="btn btn-primary mr-3"
								to={`/users/${
									this.props.match.params.id
								}/activities/${
									this.props.match.params.activity_id
								}/sessions/new`}
							>
								New Session
							</Link>
							<Link className="btn btn-warning" to="/dashboard">
								Back
							</Link>
						</div>
					)}
				</div>

				<h2>Total time spent: {secondsConverter(totalTime)}</h2>
				<h4>Sessions (starting with most recent):</h4>
				<div className="d-flex justify-content-center flex-wrap">
					{listOfSessions}
				</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		currentUser: state.currentUser,
		activity: state.activities[0]
	};
}

export default connect(
	mapStateToProps,
	{ fetchOneActivity, removeError, deleteSession }
)(Activity);
