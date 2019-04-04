import { apiCall, setTokenHeader } from "../../services/api";
import { SET_CURRENT_USER } from "../actionTypes";
import { addError, removeError } from "./errors";

//an action creator function , this returns the object action we are going to dispatch and send to redux
export function setCurrentUser(user) {
	return {
		type: SET_CURRENT_USER,
		user
	};
}
//redux thunk lets us return 'dispatch' arrow function to execute some async code BEFORE returning the action or another call
// with thunk, we can run multiple functions, make async calls, do some logic, rather than having to immediately return an action object like the function above
export function logoutUser() {
	return dispatch => {
		localStorage.clear();
		setAuthorizationHeader(false);
		//need to also set current user as an empty object.  because even though we clear the localStorage, the redux state still has us marked as logged in
		dispatch(setCurrentUser({}));
	};
}

export function setAuthorizationHeader(token) {
	setTokenHeader(token);
}

export function authUser(signUpOrSignIn, userData) {
	return dispatch => {
		return new Promise((resolve, reject) => {
			return apiCall("post", `/api/auth/${signUpOrSignIn}/`, userData)
				.then(({ token, ...userInfo }) => {
					localStorage.setItem("jwtToken", token);
					setAuthorizationHeader(token);
					dispatch(setCurrentUser(userInfo));
					dispatch(removeError());
					resolve();
				})
				.catch(err => {
					dispatch(addError(err.message));
					reject();
				});
		});
	};
}
