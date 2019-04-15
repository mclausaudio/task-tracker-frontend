import React, { Component } from "react";
import jwtDecode from "jwt-decode";
import { Provider } from "react-redux";
import { configureStore } from "../store";
import { BrowserRouter as Router } from "react-router-dom";

import Navbar from "./Navbar";
import Main from "./Main";
import { setAuthorizationHeader, setCurrentUser } from "../store/actions/auth";

const store = configureStore();

//if we refresh the page and a token already exists in local storage, we go ahead and set the header token to the previously stored stoken
if (localStorage.jwtToken) {
	setAuthorizationHeader(localStorage.jwtToken);
	//we want to use a try statement so people don't tamper with the jwtToken key
	try {
		//we need to take the token in storage and use jwtDecode, to decode the middle part of the token and provide the appropriate user info. so using setCurrentUser with the decoded info, which is a user object, if all goes right and it wasnt messed with
		store.dispatch(setCurrentUser(jwtDecode(localStorage.jwtToken)));
	} catch (err) {
		alert("problem");
		//we dispatch setCurrentUser with an epty object to forcbily log them out
		store.dispatch(setCurrentUser({}));
	}
}

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<Router>
					<div>
						<Navbar />
						<Main />
					</div>
				</Router>
			</Provider>
		);
	}
}

export default App;
