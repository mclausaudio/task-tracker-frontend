import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logoutUser } from "../store/actions/auth";

class Navbar extends Component {
	render() {
		const { currentUser, logoutUser } = this.props;

		return (
			<nav className="navbar navbar-expand">
				<div className="container-fluid">
					<Link to="/" className="navbar-brand">
						text
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
					<ul className="nav navbar-nav navbar-right">
						<li>
							<a onClick={logoutUser}>logout</a>
						</li>
					</ul>
				)}
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
