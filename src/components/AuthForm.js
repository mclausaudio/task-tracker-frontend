import React, { Component } from "react";
import errors from "../store/reducers/errors";
import { removeError } from "../store/actions/errors";

export default class AuthForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: "",
			username: "",
			password: "",
			profilePicture: ""
		};
	}

	handleChange = e => {
		this.setState({
			[e.target.name]: e.target.value
		});
	};

	handleSubmit = e => {
		e.preventDefault();
		console.log("handle submit");
		//use that boolean prop to determine what type of auth, signup or login
		const authType = this.props.signUp ? "signup" : "signin";
		this.props.onAuth(authType, this.state).then(console.log("success"));
	};

	render() {
		let { email, username, password, profilePicture } = this.state;
		//we destructor 'history' off of props, which comes from the react router
		let {
			heading,
			buttonText,
			signUp,
			errors,
			removeError,
			history
		} = this.props;
		console.log(errors);
		//history.listens listens for any changes in the route, then executes the code inside the callback
		history.listen(() => {
			removeError();
		});

		return (
			<div>
				<div className="row justify-content-md-center text-center">
					<div className="col-md-6">
						<form onSubmit={this.handleSubmit}>
							<h2>{heading}</h2>
							{errors.message && (
								<div className="alert alert-danger">
									{errors.message}
								</div>
							)}
							<label htmlFor="email">Email:</label>
							<input
								type="text"
								id="email"
								name="email"
								className="form-control"
								onChange={this.handleChange}
								value={email}
							/>
							<label htmlFor="email">Password:</label>
							<input
								type="password"
								id="password"
								name="password"
								className="form-control"
								onChange={this.handleChange}
							/>
							{/* We are now going to conditionally render form info, based on if a signup prop (boolean) is passed in */}
							{/* {If there IS a signUp prop being passed in, then render these additional fields} */}
							{signUp && (
								<div>
									<label htmlFor="username">Username:</label>
									<input
										className="form-control"
										id="username"
										name="username"
										onChange={this.handleChange}
										value={username}
										type="text"
									/>
									<label htmlFor="profilePicture">
										Profile Picture:
									</label>
									<input
										className="form-control"
										id="profilePicture"
										name="profilePicture"
										onChange={this.handleChange}
										value={profilePicture}
										type="text"
									/>
								</div>
							)}
							<button
								type="submit"
								className="btn btn-primary btn-block btn-lg"
							>
								{buttonText}
							</button>
						</form>
					</div>
				</div>
			</div>
		);
	}
}
