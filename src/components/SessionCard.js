import React, { Component } from "react";
import { Link } from "react-router-dom";
import Moment from "react-moment";
import { deleteSession } from "../store/actions/sessions";

import { secondsConverter } from "../services/secondsConverters";

class SessionCard extends Component {
	handleToggle = () => {
		this.props.toggleEditing(this.props.sessionId);
	};

	render() {
		let {
			description,
			createdAt,
			picture,
			totalTimeSpent,
			sessionId,
			activityId
		} = this.props;
		return (
			<div className="card w-75 mt-2">
				<div className="card-body">
					<h5 className="card-title">
						<Moment parse="YYYY-MM-DD HH:mm">{createdAt}</Moment>
					</h5>
					<p className="card-text">
						Session duration: {secondsConverter(totalTimeSpent)}
					</p>

					<p className="card-text">{description}</p>
					<div className="btn-group">
						<button
							className="btn btn-warning"
							onClick={this.handleToggle}
						>
							Edit
						</button>
						<button
							className="btn btn-danger"
							onClick={() => {
								console.log(this.props);
								this.props.deleteSession({
									activityId,
									sessionId
								});
							}}
						>
							Delete
						</button>
					</div>
				</div>
			</div>
		);
	}
}

export default SessionCard;
