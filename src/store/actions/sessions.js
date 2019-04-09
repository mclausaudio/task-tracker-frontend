import { apiCall } from "../../services/api";
import { addError } from "./errors";
import {
	LOAD_SESSIONS,
	REMOVE_SESSIONS,
	LOAD_ONE_SESSION
} from "../actionTypes";

export const loadSessions = sessions => {
	return {
		type: LOAD_SESSIONS,
		sessions
	};
};

export const loadOneSession = session => {
	return {
		type: LOAD_ONE_SESSION,
		session
	};
};

export const fetchSessions = () => {
	return dispatch => {
		return apiCall("get", "/api/sessions")
			.then(res => {
				dispatch(loadSessions(res));
			})
			.catch(err => {
				dispatch(addError(err.message));
			});
	};
};

export const fetchOneSession = (userId, activityId, sessionId) => {
	return dispatch => {
		return apiCall(
			"get",
			`/api/users/${userId}/activities/${activityId}/sessions/${sessionId}`
		)
			.then(res => {
				dispatch(loadOneSession(res));
				console.log("inside fetchOnesession", res);
			})
			.catch(err => {
				dispatch(addError(err.message));
			});
	};
};

// /api/users /: id / activities /: activity_id / sessions
export const postNewSession = sessionObject => (dispatch, getState) => {
	let { currentUser } = getState();
	const id = currentUser.user.id;
	console.log(id);
	return apiCall(
		"post",
		`/api/users/${id}/activities/${sessionObject.activityId}/sessions`,
		sessionObject
	)
		.then(res => {})
		.catch(err => dispatch(addError(err.message)));
};
