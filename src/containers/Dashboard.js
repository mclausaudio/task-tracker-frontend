import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { fetchActivities } from "../store/actions/activities";

import Card from "../components/Card";

class Dashboard extends Component {
	componentDidMount() {
		this.props.fetchActivities(this.props.currentUser.user.id);
	}
	render() {
		let { activities, currentUser } = this.props;
		console.log(activities);
		let activitiesList = activities.map(a => {
			return (
				<Card
					key={a.id}
					title={a.title}
					isPrivate={a.isPrivate}
					description={a.description}
					picture={a.activityPicture}
					sessions={a.sessions}
				/>
			);
		});

		return (
			<div className="row">
				<div className="col-md-4">
					<p>Hello</p>
				</div>
				<div className="col-md-8">
					<div>
						<Link to="/sessions/new">New Session</Link>
						<Link to="/activities/">View Activities</Link>
					</div>
					<p>Your Activities:</p>
					<div className="row d-flex" />
					{activitiesList}
				</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		currentUser: state.currentUser,
		activities: state.activities
	};
}

export default connect(
	mapStateToProps,
	{ fetchActivities }
)(Dashboard);
