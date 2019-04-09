import React, { Component } from "react";
import { Link } from "react-router-dom";

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
			sessionId
		} = this.props;
		return (
			<div className="card">
				<img
					className="card-img-top"
					src={picture}
					alt="Card image cap"
				/>
				<div className="card-body">
					<h5 className="card-title">{createdAt}</h5>
					<p className="card-text">
						Session duration: {totalTimeSpent}
						{sessionId}
					</p>

					<p className="card-text">{description}</p>
					<button
						className="btn btn-warning btn-block"
						onClick={this.handleToggle}
					>
						Edit
					</button>
					<button className="btn btn-danger btn-block">Delete</button>
				</div>
			</div>
		);
	}
}

export default SessionCard;
