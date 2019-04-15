import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logoutUser } from "../store/actions/auth";

import { FaProjectDiagram } from "react-icons/fa";
class Navbar extends Component {
	render() {
		const { currentUser, logoutUser } = this.props;

		return (
			<nav className="navbar navbar-expand">
				<div className="container-fluid">
					<div className="navbar-header">
						<Link to="/" className="navbar-brand">
							<FaProjectDiagram className="mr-3" />
							Task Tracker
						</Link>
					</div>

					{!currentUser.isAuthenticated ? (
						<ul className="nav navbar-nav navbar-right">
							<li>
								<Link to="/signup">Sign up</Link>
							</li>
							<li>
								<Link to="/signin">Log in</Link>
							</li>
						</ul>
					) : (
						<div className="nav navbar-nav navbar-right">
							<li>
								<Link to="/dashboard">Dashboard</Link>
							</li>
							<li>
								<Link onClick={logoutUser}>Logout</Link>
							</li>
						</div>
					)}
				</div>
			</nav>
		);
	}
}

function mapStateToProps(state) {
	return {
		currentUser: state.currentUser
	};
}

export default connect(
	mapStateToProps,
	{ logoutUser }
)(Navbar);
