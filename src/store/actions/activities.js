import { apiCall } from "../../services/api";
import { addError } from "./errors";
import { LOAD_ACTIVITIES, REMOVE_ACTIVITIES } from "../actionTypes";

export const loadActivities = activities => {
	return {
		type: LOAD_ACTIVITIES,
		activities
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
