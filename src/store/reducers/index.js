import { combineReducers } from "redux";
import currentUser from "./currentUser";
import errors from "./errors";
import sessions from "./sessions";

const rootReducer = combineReducers({
	currentUser,
	errors,
	sessions
});

export default rootReducer;
