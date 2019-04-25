import React from "react";

import { Link } from "react-router-dom";

const LandingAbout = () => {
	return (
		<div>
			<div className="about">
				<div className="row pb-3">
					<div className="col-md-12">
						<div className="text-center">
							<h2>Why use task tracker?</h2>
						</div>
					</div>
				</div>
				<div className="row d-flex justify-content-center">
					<div className="col-md-3 d-flex align-items-stretch">
						<div class="card d-flex flex-column justify-content-between">
							<i class="fas fa-briefcase card-img-top landing-page-card" />
							<div class="card-body">
								<h5 class="card-title">
									Track your productivity
								</h5>
								<p class="card-text">
									Task Tracker allows you to monitor your
									productivity as you work.
								</p>
							</div>
						</div>
					</div>
					<div className="col-md-3">
						<div class="card">
							<i class="fas fa-user-clock card-img-top landing-page-card" />
							<div class="card-body">
								<h5 class="card-title">Monitor your work</h5>
								<p class="card-text">
									After signing up, you can add timed sessions
									to the activities your choose to add to your
									profile.
								</p>
							</div>
						</div>
					</div>
					<div className="col-md-3">
						<div class="card">
							<i class="fas fa-chart-bar card-img-top landing-page-card" />
							<div class="card-body">
								<h5 class="card-title">
									Visualize your habits
								</h5>
								<p class="card-text">
									As you accumulate timed sessions, insight
									into your working habits will grow.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<section className="how-it-works">
				<div className="container">
					<div className="row my-5">
						<div className="col-md-12">
							<div className="text-center">
								<h2>How it works</h2>
							</div>
						</div>
					</div>
					<div className="row d-flex align-items-center">
						<div className="col-md-6 text-center">
							<img
								className="about-image w-50"
								src="activity_card.png"
								alt=""
							/>
						</div>
						<div className="col-md-6">
							<div className="content">
								<h4 className="about-title text-center">
									Track your productivity in real time.
								</h4>
								<p className="about-text">
									After creating an account, users can add
									activities that they would like to track to
									their dashboard (ex. Study Redux). Within
									each activity, users can add timed sessions
									when they are ready to work.
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
								<h4 className="about-title">
									Visualizing work habits.
								</h4>
								<p className="about-text">
									As a user accumulates timed sessions, graphs
									displaying their working habits are rendered
									to that activities dashboard. Each timed
									session is displayed individually so a user
									can see how long they worked for that
									particular day, as well as an overall total
									of how long a user has been working on that
									particular activity.
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
			</section>
		</div>
	);
};

export default LandingAbout;
