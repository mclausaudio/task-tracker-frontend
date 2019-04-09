import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect, Link } from "react-router-dom";

import SessionCard from "../components/SessionCard";
import SessionEditForm from "../components/SessionEditForm";

import { fetchOneActivity, removeActivity } from "../store/actions/activities";
import { fetchOneSession, deleteSession } from "../store/actions/sessions";
import { removeError } from "../store/actions/errors";

class Activity extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isEditing: false,
			sessionIdToEdit: null
		};
	}

	componentDidMount() {
		this.props.fetchOneActivity(
			this.props.match.params.id,
			this.props.match.params.activity_id
		);
	}
	toggleEditing = sessionId => {
		let toggle = !this.state.isEditing;
		this.setState({
			isEditing: toggle,
			sessionIdToEdit: sessionId
		});
	};

	deleteSession = sessionId => {
		this.props.deleteSession(sessionId);
		this.props.history.push("/dashboard");
	};

	render() {
		if (!this.props.activity) {
			return <Redirect to="/dashboard" />;
		}
		let { activity } = this.props;
		let { isEditing } = this.state;
		let totalTime = 0;
		let listOfSessions = activity.sessions.map(s => {
			totalTime += s.totalTimeSpent;
			return (
				<SessionCard
					sessionId={s._id}
					// activityId={this.props.activity._id}
					activityId={s.activityId}
					createdAt={s.createdAt}
					description={s.notes}
					toggleEditing={this.toggleEditing}
					totalTimeSpent={s.totalTimeSpent}
					deleteSession={this.deleteSession}
				/>
			);
		});
		console.log(this.props);
		return (
			<div>
				<h2>{activity.title}</h2>
				{isEditing ? (
					<div>
						<SessionEditForm
							userId={this.props.currentUser.user.id}
							activityId={this.props.activity._id}
							sessionId={this.state.sessionIdToEdit}
							toggleEditing={this.toggleEditing}
						/>
					</div>
				) : (
					<Link
						className="btn btn-primary"
						to={`/users/${this.props.match.params.id}/activities/${
							this.props.match.params.activity_id
						}/sessions/new`}
					>
						New Session
					</Link>
				)}

				<p>Total Time: {totalTime}</p>
				<h4>Sessions:</h4>
				{listOfSessions}
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
