import React from "react";
import { Link } from "react-router-dom";

const Card = props => {
	let {
		title,
		description,
		picture,
		id,
		activityId,
		currentUser,
		path,
		isSession
	} = props;

	//should add if statements to catch parameters being passed in, to determine if its for session or for activity card

	return (
		<div className="card">
			<img className="card-img-top" src={picture} alt="Card image cap" />
			<div className="card-body">
				<h5 className="card-title">{title}</h5>
				{isSession && (
					<p className="card-text">
						Session duration: {props.totalTimeSpent}
					</p>
				)}
				<p className="card-text">{description}</p>
				<Link to={path} className="btn btn-primary">
					View
				</Link>
				<button
					className="btn btn-warning"
					onClick={props.toggleEditing}
				>
					Edit
				</button>
				<button className="btn btn-danger">Delete</button>
			</div>
		</div>
	);
};

export default Card;
