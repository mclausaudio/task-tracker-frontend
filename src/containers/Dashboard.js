import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import ActivityFeed from "../components/ActivityFeed";

class Dashboard extends Component {
	render() {
		let { activities, currentUser } = this.props;
		console.log("dash", activities);

		return (
			<div className="row">
				{/* below is side bar, can break out into component */}
				<div className="col-md-2">
					<p>Hello</p>
				</div>
				{/* below is main feed */}
				<div className="col-md-10">
					<ActivityFeed />
				</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		currentUser: state.currentUser
	};
}

export default connect(mapStateToProps)(Dashboard);
