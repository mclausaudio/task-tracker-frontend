import React from "react";
import { Link } from "react-router-dom";

const Homepage = () => {
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
};

export default Homepage;
