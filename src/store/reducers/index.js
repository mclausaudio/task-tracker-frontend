import { combineReducers } from "redux";
import currentUser from "./currentUser";
import errors from "./errors";
import sessions from "./sessions";
import activities from "./activities";

const rootReducer = combineReducers({
	currentUser,
	errors,
	sessions,
	activities
});

export default rootReducer;
