import React, { Component } from "react";

// import { postNewActivity } from "../store/actions/activities";

export default class NewActivityForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: "",
			isPrivate: false,
			description: "",
			activityPicture: ""
		};
	}
	componentDidMount() {
		if (this.props.editMode) {
			this.setState({
				title: this.props.activityToEdit.title,
				isPrivate: this.props.activityToEdit.isPrivate,
				description: this.props.activityToEdit.description,
				activityPicture: this.props.activityToEdit.pictureUrl,
				id: this.props.activityToEdit.id
			});
		}
	}

	componentWillUnmount() {
		this.state = {
			title: "",
			isPrivate: false,
			description: "",
			activityPicture: ""
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

	handleUpdate = e => {
		e.preventDefault();
		let updated = {
			title: this.state.title,
			isPrivate: this.state.isPrivate,
			description: this.state.description,
			activityPicture: this.state.activityPicture,
			id: this.state.id
		};
		this.props.handleUpdateActivity(updated);
	};

	handleSubmit = e => {
		e.preventDefault();
		if (this.state.title.length < 3) {
			alert("Please provide a title that is 3 or more characters");
		} else {
			let newActivity = {
				title: this.state.title,
				isPrivate: this.state.isPrivate,
				description: this.state.description,
				activityPicture: this.state.activityPicture
			};
			this.props.activitySubmit(newActivity);
			this.setState({
				title: "",
				isPrivate: false,
				description: "",
				activityPicture: ""
			});
		}
	};
	render() {
		let { title, isPrivate, description, activityPicture } = this.state;
		return (
			<div className="row justify-content-md-center text-center">
				<div className="col-md-6">
					<form>
						<h3>New Activity</h3>
						<label htmlFor="email">Title:</label>
						<input
							type="text"
							id="title"
							name="title"
							className="form-control"
							onChange={this.handleChange}
							value={title}
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

						<label htmlFor="email">Activity Picture (URL):</label>
						<input
							type="text"
							id="activityPicture"
							name="activityPicture"
							className="form-control"
							onChange={this.handleChange}
							value={activityPicture}
						/>
						<label htmlFor="email">Description (optional):</label>
						<textarea
							type="text"
							id="description"
							name="description"
							className="form-control"
							onChange={this.handleChange}
							value={description}
						/>
						{this.props.activityToEdit ? (
							<button
								className="btn btn-primary btn-block"
								onClick={this.handleUpdate}
							>
								Update
							</button>
						) : (
							<button
								onClick={this.handleSubmit}
								className="btn btn-primary btn-block mt-3"
							>
								Create
							</button>
						)}
					</form>
				</div>
			</div>
		);
	}
}
