import React from "react";
import { Link } from "react-router-dom";
import Dashboard from "../containers/Dashboard";

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
	return <p>placeholder, but you are logged in nice</p>;
};

export default Homepage;
