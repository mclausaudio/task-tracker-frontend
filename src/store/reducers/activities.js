import {
	LOAD_ACTIVITIES,
	LOAD_ONE_ACTIVITY,
	REMOVE_ACTIVITY
} from "../actionTypes";

const activities = (state = [], action) => {
	switch (action.type) {
		case LOAD_ACTIVITIES:
			return [...action.activities];
		case LOAD_ONE_ACTIVITY:
			console.log("hello", action.activity);
			return [action.activity];
		case REMOVE_ACTIVITY:
			return [];
		default:
			return state;
	}
};
export default activities;
