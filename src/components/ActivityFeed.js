import React, { Component } from "react";
import { connect } from "react-redux";
import {
	fetchActivities,
	postNewActivity,
	deleteActivity,
	updateActivity
} from "../store/actions/activities";

import NewActivityForm from "../components/NewActivityForm";
import Card from "../components/Card";

class ActivityFeed extends Component {
	constructor(props) {
		super(props);
		this.state = {
			displayAddActivity: false,
			editMode: false,
			addActivityBtnText: "Add new activity",
			activities: []
		};
	}

	// renderActivities = async () => {
	// 	await this.props.fetchActivities(this.props.currentUser.user.id);
	// 	this.setState({
	// 		activities: this.props.activities
	// 	});
	// };
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
		if (this.state.editMode) {
			this.setState({ editMode: false });
		}
		this.setState({
			displayAddActivity: toggle,
			addActivityBtnText: toggle ? "Hide Form" : "Add new activity"
		});
	};
	//this is for the CARD to set some state
	toggleEditActivity = (title, picurl, isPrivate, description, id) => {
		this.setState({
			editMode: true,
			activityToEdit: {
				title: title,
				isPrivate: isPrivate,
				pictureUrl: picurl,
				description: description,
				id: id
			}
		});
		console.log(
			"title",
			title,
			"picurl",
			picurl,
			"description",
			description,
			"id",
			id
		);
		this.toggleNewActivity();
	};

	handleActivitySubmit = activity => {
		this.toggleNewActivity();
		let post = async () => {
			let newActivity = await this.props.postNewActivity(activity);
		};
		post();
	};

	deleteActivity = activityId => {
		console.log("inhere");
		let remove = async () => {
			await this.props.deleteActivity(activityId);
		};
		remove();
		this.setState({
			activities: []
		});
		this.renderActivities();
	};
	//this what actually fires when the form is submited
	handleUpdateActivity = updatedObject => {
		console.log(updatedObject);
		this.props.updateActivity(updatedObject);
		this.setState({
			editMode: false,
			displayAddActivity: false,
			activityToEdit: undefined
		});
		this.renderActivities();
	};

	render() {
		let { displayAddActivity, editMode, addActivityBtnText } = this.state;
		let { errors, currentUser } = this.props;
		// console.log(activities.length);
		let activitiesList = (
			<h5 className="mx-auto mt-5">No activities to display</h5>
		);
		if (this.props.activities.length > 0) {
			activitiesList = this.props.activities.map(a => {
				return (
					<Card
						currentUser={currentUser}
						key={a._id}
						id={a._id}
						title={a.title}
						isPrivate={a.isPrivate}
						description={a.description}
						picture={a.activityPicture}
						path={`users/${currentUser.user.id}/activities/${
							a._id
						}`}
						deleteActivity={this.deleteActivity}
						toggleEditActivity={this.toggleEditActivity}
					/>
				);
			});
		}

		return (
			<div>
				<h1 className="text-center mb-5">
					Welcome, {currentUser.user.username}
				</h1>
				<div>
					<button
						className="btn btn-primary btn-block mb-3"
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
						editMode={this.state.editMode}
						activityToEdit={this.state.activityToEdit}
						handleUpdateActivity={this.handleUpdateActivity}
					/>
				)}

				<h3 className="text-center">Your Activities:</h3>
				<div className="row d-flex ">{activitiesList}</div>
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
	{ fetchActivities, postNewActivity, deleteActivity, updateActivity }
)(ActivityFeed);
