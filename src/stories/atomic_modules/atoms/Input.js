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
				className={ this.props.className }
				disabled={ this.props.disabled }
				id={ this.props.id }
				type={ this.props.type }
				placeholder={ this.props.placeholder }
				value={ this.state.inputVal }
				onChange={ this.handleInputChange } />
		);
	}
}

Input.propTypes = {
	className: PropTypes.string,
	disabled: PropTypes.bool.isRequired,
	id: PropTypes.string,
	onChange: PropTypes.func,
	type: PropTypes.string.isRequired,
	value: PropTypes.string
}

Input.defaultProps = {
	disabled: false,
	placeholder: '',
	type: 'text',
}

export default Input;
