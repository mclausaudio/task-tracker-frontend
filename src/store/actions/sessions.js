import { apiCall } from "../../services/api";
import { addError } from "./errors";
import { LOAD_SESSIONS, REMOVE_SESSIONS } from "../actionTypes";

export const loadSessions = sessions => {
	return {
		type: LOAD_SESSIONS,
		sessions
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
