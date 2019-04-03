import React from "react";
import { Link } from "react-router-dom";

const Homepage = ({ currentUser }) => {
	if (!currentUser.isAuthenticated) {
		return (
			<div className="home-hero">
				<h1>Hello.</h1>
				<h2>Welcome to Task-Tracker</h2>
				<Link to="/signup" className="btn btn-primary">
					Sign up
				</Link>
				<Link to="/signin" className="btn btn-primary">
					Sign In
				</Link>
			</div>
		);
	}
	return (
		<div>
			<h1>you made import PropTypes from 'prop-types'</h1>
		</div>
	);
};

export default Homepage;
