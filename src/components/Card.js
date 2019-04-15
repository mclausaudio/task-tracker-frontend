import React from "react";
import { Link } from "react-router-dom";

const Card = props => {
	let { title, description, isPrivate, id, path } = props;
	let picture = props.picture || "/default_activity.svg";

	//should add if statements to catch parameters being passed in, to determine if its for session or for activity card

	let editActivity = () => {
		props.toggleEditActivity(title, picture, isPrivate, description, id);
	};

	return (
		<div className="card text-center mr-2 mt-2">
			<img
				className="card-img-top mt-2"
				src={picture}
				alt="Card image cap"
			/>
			<div className="card-body">
				<h5 className="card-title">{title}</h5>
				<p className="card-text">{description}</p>
				<div className="btn-group">
					<Link to={path} className="btn btn-primary">
						View
					</Link>
					<button className="btn btn-warning" onClick={editActivity}>
						Edit
					</button>
					<button
						className="btn btn-danger"
						onClick={() => {
							console.log(id);
							props.deleteActivity(id);
						}}
					>
						Delete
					</button>
				</div>
			</div>
		</div>
	);
};

export default Card;
