import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { fetchSessions } from "../store/actions/sessions";

class Dashboard extends Component {
	componentDidMount() {
		this.props.fetchSessions();
	}
	render() {
		let { sessions, currentUser } = this.props;
		console.log(sessions);
		let sessionsList = sessions.map(s => {
			return <p>a sessions placehold</p>;
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
					<p>Recent Sessions:</p>
					{sessionsList}
				</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		currentUser: state.currentUser,
		sessions: state.sessions
	};
}

export default connect(
	mapStateToProps,
	{ fetchSessions }
)(Dashboard);
