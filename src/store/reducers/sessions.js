import {
	LOAD_SESSIONS,
	LOAD_ONE_SESSION,
	REMOVE_SESSION
} from "../actionTypes";

const sessions = (state = [], action) => {
	switch (action.type) {
		case LOAD_SESSIONS:
			return [...action.sessions];
		case LOAD_ONE_SESSION:
			return [action.session];
		case REMOVE_SESSION:
			return [];
		default:
			return state;
	}
};
export default sessions;
