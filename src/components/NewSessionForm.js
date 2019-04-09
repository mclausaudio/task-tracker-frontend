import React, { Component } from "react";

export default class NewSessionForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			notes: "",
			isPrivate: false
		};
	}

	handleChange = e => {
		console.log(e.target.name, e.target.value);
		if (e.target.name === "isPrivate") {
			if (e.target.value == "true") {
				this.setState({
					isPrivate: true
				});
			} else {
				this.setState({
					isPrivate: false
				});
			}
		} else {
			this.setState({
				[e.target.name]: e.target.value
			});
		}
	};

	handleSubmit = e => {
		e.preventDefault();
		this.props.sessionSubmit(this.state.notes, this.state.isPrivate);
		this.setState({
			notes: "",
			isPrivate: false
		});
		console.log("new session props", this.props);
		// http://localhost:3000/users/5cabefb9129af10f68f311c7/activities/5cabf5a6129af10f68f311ca
		// this.props.history.push()
	};

	render() {
		let { title, notes, isPrivate, showTimer, seconds } = this.state;
		let { heading } = this.props;
		return (
			<div>
				<div className="row justify-content-md-center text-center">
					<div className="col-md-6">
						<h2>{heading}</h2>
						<form onSubmit={this.handleSubmit}>
							<label htmlFor="email">Notes:</label>
							<textarea
								type="text"
								id="notes"
								name="notes"
								className="form-control"
								onChange={this.handleChange}
							/>
							<div>
								<label htmlFor="isPrivate">
									Would you like to hide this activity on your
									dashboard?
								</label>
								<select
									value={this.state.value}
									name="isPrivate"
									onChange={this.handleChange}
								>
									<option value={false}>No</option>
									<option value={true}>Yes</option>
								</select>
							</div>
							<button
								type="submit"
								className="btn btn-primary btn-block btn-lg"
							>
								Create
							</button>
						</form>
					</div>
				</div>
			</div>
		);
	}
}
