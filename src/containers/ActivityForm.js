import React, { Component } from "react";
import { connect } from "react-redux";

//added as container because we need to use redux state
class ActivityForm extends Component {
	render() {
		return <div />;
	}
}

function mapStateToProps() {
	return {};
}

export default connect(
	mapStateToProps,
	{}
)(ActivityForm);
