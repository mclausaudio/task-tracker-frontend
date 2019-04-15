import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchOneSession, updateSession } from "../store/actions/sessions";

class SessionEditForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			notes: "",
			isPrivate: false
		};
	}
	componentDidMount() {
		let { userId, activityId, sessionId } = this.props;
		const grabOne = async () => {
			await this.props.fetchOneSession(userId, activityId, sessionId);
			this.setState({
				notes: this.props.sessionToEdit[0].notes,
				isPrivate: this.props.sessionToEdit[0].isPrivate
			});
			console.log(
				"inside component did mount edit form",
				this.props.sessionToEdit[0]
			);
		};
		console.log("right after async", this.props);
		grabOne();
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
		let updatedSession = {
			notes: this.state.notes,
			isPrivate: this.state.isPrivate,
			activityId: this.props.activityId,
			sessionId: this.props.sessionId
		};
		console.log("updated session ======", updatedSession);
		const update = async () => {
			let updated = await this.props.updateSession(updatedSession);
			console.log(updated);
		};
		update();
		this.props.toggleEditing(null);
	};
	render() {
		let { userId, activityId, sessionId, toggleEditing } = this.props;
		return (
			<div className="row justify-content-md-center text-center">
				<div className="col-md-6">
					<form onSubmit={this.handleSubmit}>
						<label htmlFor="email">Notes:</label>
						<textarea
							type="text"
							id="notes"
							name="notes"
							className="form-control"
							value={this.state.notes}
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
							Update
						</button>
						<button
							className="btn btn-primary btn-block btn-lg"
							onClick={toggleEditing}
						>
							Cancel
						</button>
					</form>
				</div>
			</div>
		);
	}
}
function mapStateToProps(state) {
	return {
		currentUser: state.currentUser,
		activity: state.activities[0],
		sessionToEdit: state.sessions
	};
}

export default connect(
	mapStateToProps,
	{ fetchOneSession, updateSession }
)(SessionEditForm);
