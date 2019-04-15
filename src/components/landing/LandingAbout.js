import React from "react";

import { Link } from "react-router-dom";

const LandingAbout = () => {
	return (
		<div className="about">
			<div className="row mb-5">
				<div className="col-md-12">
					<div className="text-center mb-5">
						<h2>Why use task tracker?</h2>
					</div>
				</div>
			</div>
			<div className="row">
				<div className="col-md-6 text-center">
					<img
						className="about-image w-50"
						src="activity_card.png"
						alt=""
					/>
				</div>
				<div className="col-md-6">
					<div className="content">
						<h4 className="about-title">
							Track your productivity in real time.
						</h4>
						<p className="about-text">
							Task Tracker allows you to monitor your productivity
							as you work. After signing up, you can add timed
							sessions to the activities your choose to add to
							your profile.
						</p>
						<div className="w-100 d-flex justify-content-center">
							<Link
								to="/signup"
								className="btn btn-primary about-btn"
							>
								Sign Up
							</Link>
						</div>
					</div>
				</div>
			</div>
			<div className="row mt-5">
				<div className="col-md-6">
					<div className="content">
						<h4 className="about-title">Track your progress.</h4>
						<p className="about-text">
							Graphs are rendered based on your timed sessions.
							For each activity, graphs are rendered based on your
							session data.
						</p>
						<div className="w-100 d-flex justify-content-center">
							<Link
								to="/signup"
								className="btn btn-primary about-btn"
							>
								Sign Up
							</Link>
						</div>
					</div>
				</div>
				<div className="col-md-6 text-center">
					<img
						className="about-image"
						src="activity_view.png"
						alt=""
					/>
				</div>
			</div>
		</div>
	);
};

export default LandingAbout;
