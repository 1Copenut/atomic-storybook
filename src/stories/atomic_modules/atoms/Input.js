import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
	constructor(props) {
		super(props);

		this.state = {
			inputVal: ''
		};
	}

	handleInputChange = (e) => {
		this.setState({ inputVal: e.target.value });
	}

	render() {
		return (
			<input 
				type={ this.props.type }
				value={ this.state.inputVal }
				onChange={ this.handleInputChange } />
		);
	}
}

Input.propTypes = {
	type: PropTypes.string.isRequired,
}

Input.defaultProps = {
	type: 'text'
}

export default Input;
