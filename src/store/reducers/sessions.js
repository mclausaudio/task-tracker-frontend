import { LOAD_SESSIONS } from "../actionTypes";

const sessions = (state = [], action) => {
	switch (action.type) {
		case LOAD_SESSIONS:
			return [...action.sessions];
		default:
			return state;
	}
};
export default sessions;
