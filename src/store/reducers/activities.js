import { LOAD_ACTIVITIES } from "../actionTypes";

const activities = (state = [], action) => {
	switch (action.type) {
		case LOAD_ACTIVITIES:
			return [...action.activities];
		default:
			return state;
	}
};
export default activities;
