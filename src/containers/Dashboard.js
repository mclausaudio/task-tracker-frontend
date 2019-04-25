import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import ActivityFeed from "../components/ActivityFeed";
import UserInfo from "../components/UserInfo";

class Dashboard extends Component {
	render() {
		let { activities, currentUser } = this.props;
		console.log("dash", activities);

		return (
			<div className="mt-5 row">
				{/* below is side bar, can break out into component */}
				<div className="col-md-3 d-none d-sm-none d-md-block">
					<UserInfo currentUser={this.props.currentUser} />
				</div>

				{/* below is main feed */}
				<div className="col-md-9">
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
