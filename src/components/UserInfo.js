import React from "react";

const UserInfo = props => {
	let { user } = props.currentUser;
	let { email, username, createdAt } = user;
	let picture =
		props.currentUser.user.profilePicture || "/default_profile_pic.svg";
	console.log(props.currentUser);
	return (
		<div className=" w-100">
			<img
				src={picture}
				className="card-img-top rounded-circle"
				alt="user picture"
			/>
			<div className="card-body">
				<h5 className="card-title">{username}</h5>
			</div>
		</div>
	);
};

export default UserInfo;
