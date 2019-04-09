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
			addActivityBtnText: "New Activity",
			activities: []
		};
	}

	renderActivities = async () => {
		await this.props.fetchActivities(this.props.currentUser.user.id);
		this.setState({
			activities: this.props.activities
		});
	};

	componentDidMount() {
		this.renderActivities();
	}

	toggleNewActivity = () => {
		let toggle = !this.state.displayAddActivity;
		this.setState({
			displayAddActivity: toggle,
			addActivityBtnText: toggle ? "Hide Form" : "New Activity"
		});
	};

	handleActivitySubmit = activity => {
		this.toggleNewActivity();
		let post = async () => {
			await this.props.postNewActivity(activity);
		};
		post();
		this.renderActivities();
	};

	render() {
		let { displayAddActivity, addActivityBtnText } = this.state;
		let { errors, currentUser } = this.props;
		// console.log(activities.length);
		let activitiesList = <p>No activities</p>;
		if (this.state.activities.length > 0) {
			activitiesList = this.state.activities.map(a => {
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
						path={`users/${currentUser.user.id}/activities/${
							a._id
						}`}
					/>
				);
			});
		}

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
