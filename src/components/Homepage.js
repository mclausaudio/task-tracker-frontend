import React from "react";
import { Link, Redirect } from "react-router-dom";
import Dashboard from "../containers/Dashboard";

import LandingAbout from "./landing/LandingAbout";
const Homepage = ({ currentUser, history }) => {
	if (!currentUser.isAuthenticated) {
		return (
			<div>
				<section>
					<div className="home-hero">
						<div className="overlay" />
						<div className="hero-text">
							<h1>Task-Tracker</h1>
							<h2 className="mb-2">Track your tasks</h2>
							<div className="mt-2">
								<Link
									to="/signup"
									className="btn btn-primary mr-2"
								>
									Sign up
								</Link>
								<Link to="/signin" className="btn btn-primary">
									Sign In
								</Link>
							</div>
						</div>
					</div>
				</section>
				<LandingAbout />
			</div>
		);
	} else {
		return <Redirect to="/dashboard" />;
	}
};

export default Homepage;
