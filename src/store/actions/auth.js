import { apiCall } from "../../services/api";
import { SET_CURRENT_USER } from "../actionTypes";
import { addError, removeError } from "./errors";

//an action creator function , this returns the object action we are going to dispatch and send to redux
export function setCurrentUser(user) {
	return {
		type: SET_CURRENT_USER,
		user
	};
}

export function authUser(signUpOrSignIn, userData) {
	return dispatch => {
		return new Promise((resolve, reject) => {
			return apiCall("post", `/api/auth/${signUpOrSignIn}/`, userData)
				.then(({ token, ...userInfo }) => {
					localStorage.setItem("jwtToken", token);
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
