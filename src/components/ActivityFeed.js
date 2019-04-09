import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchActivities, postNewActivity } from "../store/actions/activities";

import NewActivityForm from "../components/NewActivityForm";
import Card from "../components/Card";

class ActivityFeed extends Component {
	constructor(props) {
		super(props);
		this.state = {
			displayAddActivity: false,
			addActivityBtnText: "New Activity"
		};
	}
	componentDidMount() {
		this.props.fetchActivities(this.props.currentUser.user.id);
	}

	// componentDidUpdate() {
	// 	this.props.fetchActivities(this.props.currentUser.user.id);
	// }
	toggleNewActivity = () => {
		let toggle = !this.state.displayAddActivity;
		this.setState({
			displayAddActivity: toggle,
			addActivityBtnText: toggle ? "Hide Form" : "New Activity"
		});
	};

	handleActivitySubmit = () => {
		this.setState({
			displayAddActivity: false
		});
	};

	render() {
		let { displayAddActivity, addActivityBtnText } = this.state;
		let { activities, errors, currentUser } = this.props;
		console.log(activities);
		let activitiesList = activities.map(a => {
			return (
				<Card
					currentUser={currentUser}
					key={a._id}
					id={a._id}
					title={a.title}
					isPrivate={a.isPrivate}
					description={a.description}
					picture={a.activityPicture}
					sessions={a.sessions}
					path={`users/${currentUser.user.id}/activities/${a._id}`}
				/>
			);
		});

		return (
			<div>
				<div>
					<button
						className="btn btn-primary"
						onClick={this.toggleNewActivity}
					>
						{addActivityBtnText}
					</button>
				</div>
				{errors.message && (
					<div className="alert alert-danger">{errors.message}</div>
				)}
				{displayAddActivity && (
					<NewActivityForm
						postNewActivity={this.props.postNewActivity}
						activitySubmit={this.handleActivitySubmit}
					/>
				)}
				<p>Your Activities:</p>
				<div className="row d-flex">{activitiesList}</div>
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
	{ fetchActivities, postNewActivity }
)(ActivityFeed);
