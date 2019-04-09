import { apiCall } from "../../services/api";
import { addError } from "./errors";
import {
	LOAD_SESSIONS,
	REMOVE_SESSION,
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

export const removeSession = () => {
	return {
		type: REMOVE_SESSION
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

export const updateSession = updatedSession => (dispatch, getState) => {
	let { currentUser } = getState();
	const id = currentUser.user.id;

	return apiCall(
		"post",
		`/api/users/${id}/activities/${updatedSession.activityId}/sessions/${
			updatedSession.sessionId
		}`,
		updatedSession
	)
		.then(res => {})
		.catch(err => dispatch(addError(err.message)));
};
// /api/users/:userid/activities/:activeid/sessions/:sessionid
//Why was I unable to pass in (activityId, sessionId)?!?
//Had to pass it in as an object with activityId and sessionId keys?
export const deleteSession = idObj => (dispatch, getState) => {
	console.log("action", idObj);
	let { currentUser } = getState();
	const id = currentUser.user.id;

	return apiCall(
		"delete",
		`/api/users/${id}/activities/${idObj.activityId}/sessions/${
			idObj.sessionId
		}`
	)
		.then(res => {})
		.catch(err => {
			dispatch(addError(err.message));
		});
};
