import React from "react";
import { Link, Redirect } from "react-router-dom";
import Dashboard from "../containers/Dashboard";

import LandingPage from "./landing/LandingPage";
const Homepage = ({ currentUser, history }) => {
	return (
		<div>
			<section>
				<div className="home-hero">
					<div className="overlay" />
					<div className="hero-text">
						<h1>Task-Tracker</h1>
						<h3 className="mb-2">
							Helping you visualize your productivity
						</h3>
						{!currentUser.isAuthenticated ? (
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
						) : (
							<div className="mt-2">
								<Link
									to="/dashboard"
									className="btn btn-primary"
								>
									View Dashboard
								</Link>
							</div>
						)}
					</div>
				</div>
			</section>
			<LandingPage />
		</div>
	);
};

export default Homepage;
