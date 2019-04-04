import React from "react";
import { Switch, Route, withRouter, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import Homepage from "../components/Homepage";
import AuthForm from "../components/AuthForm";
import Dashboard from "../containers/Dashboard";
import NewForm from "../components/NewForm";
import { authUser } from "../store/actions/auth";
import { removeError } from "../store/actions/errors";

const Main = props => {
	const { authUser, errors, removeError, currentUser } = props;
	return (
		<div className="container">
			<Switch>
				<Route
					exact
					path="/"
					render={props => (
						<Homepage currentUser={currentUser} {...props} />
					)}
				/>
				<Route
					exact
					path="/signup"
					render={props => {
						return (
							<AuthForm
								signUp
								removeError={removeError}
								errors={errors}
								onAuth={authUser}
								buttonText="Sign Up"
								heading={"Join today!"}
								{...props}
							/>
						);
					}}
				/>
				<Route
					exact
					path="/signin"
					render={props => {
						return (
							<AuthForm
								removeError={removeError}
								errors={errors}
								onAuth={authUser}
								buttonText="Log In"
								heading={"Welcome Back."}
								{...props}
							/>
						);
					}}
				/>
				<Route
					exact
					path="/dashboard"
					render={props => {
						return <Dashboard {...props} />;
					}}
				/>
				<Route
					exact
					path="/sessions/new"
					render={props => {
						return (
							<NewForm
								currentUser={currentUser}
								heading={"New Session"}
							/>
						);
					}}
				/>
			</Switch>
		</div>
	);
};

function mapStateToProps(state) {
	return {
		currentUser: state.currentUser,
		errors: state.errors
		// { message: "test" }
	};
}
// You can get access to the history object's properties and the closest <Route>'s match via the withRouter higher-order component. withRouter will pass updated match, location, and history props to the wrapped component whenever it renders.

// second param in connect is associated with mapDispatchToProps, so we can leave it as null when not using
//but when we are, we add the what we want to use as a prop into the second param
export default withRouter(
	connect(
		mapStateToProps,
		{ authUser, removeError }
	)(Main)
);
