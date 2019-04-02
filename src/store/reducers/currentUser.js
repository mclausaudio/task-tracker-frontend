import { SET_CURRENT_USER } from "../actionTypes";

const DEFAULT_STATE = {
  isAuthenticated: false, //will be true when they are lgged in
  user: {} //will be all the user information when they are logged in
};

export default (state = { DEFAULT_STATE }, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        isAuthenticated: Boolean(Object.keys(action.user).length), //Making a true / false statement based on if the user object in state has any keys or not.  If it has keys, for example email username etc., then they are logged in.  if it's still empty, they are not.
        user: action.user
      };
    default:
      return state;
  }
};
