import React, { Component } from "react";
import { connect } from "react-redux";

//this is a higher order component (hoc)
// it is simply a function that wraps another component to provide it with additional functionality

export default function withAuth(ComponentToBeRendered) {
	class Authenticate extends Component {
		componentDidMount() {
			if (this.props.isAuthenticated === false) {
				this.props.history.push("/signin");
			}
		}
		componentDidUpdate(prevProps) {
			if (!prevProps.isAuthenticated) {
				this.props.history.push("/signin");
			}
		}
		render() {
			//we need to use this.props because it's to point to the componentToBeRendered props.
			return <ComponentToBeRendered {...this.props} />;
		}
	}
	function mapStateToProps(state) {
		return {
			isAuthenticated: state.currentUser.isAuthenticated
		};
	}
	return connect(
		mapStateToProps,
		null
	)(Authenticate);
}
