import { apiCall } from "../../services/api";
import { addError } from "./errors";
import {
	LOAD_ACTIVITIES,
	REMOVE_ACTIVITIES,
	REMOVE_ACTIVITY,
	LOAD_ONE_ACTIVITY
} from "../actionTypes";

export const loadActivities = activities => {
	return {
		type: LOAD_ACTIVITIES,
		activities
	};
};

export const loadOneActivity = activity => {
	return {
		type: LOAD_ONE_ACTIVITY,
		activity
	};
};

export const removeActivity = () => {
	return {
		type: REMOVE_ACTIVITY
	};
};

export const fetchActivities = userId => {
	return dispatch => {
		return apiCall("get", `/api/users/${userId}/activities`)
			.then(res => {
				dispatch(loadActivities(res));
			})
			.catch(err => {
				dispatch(addError(err.message));
			});
	};
};

export const fetchOneActivity = (userId, activityId) => {
	return dispatch => {
		return apiCall("get", `/api/users/${userId}/activities/${activityId}`)
			.then(res => dispatch(loadOneActivity(res)))
			.catch(err => {
				dispatch(addError(err.message));
			});
	};
};

export const postNewActivity = activityObject => (dispatch, getState) => {
	let { currentUser } = getState();
	const id = currentUser.user.id;
	console.log(id);
	return apiCall("post", `/api/users/${id}/activities`, activityObject)
		.then(res => {})
		.catch(err => dispatch(addError(err.message)));
};
