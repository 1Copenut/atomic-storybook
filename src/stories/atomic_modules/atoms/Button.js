import React from 'react';
import PropTypes from 'prop-types';
import { base } from '../../styles/components/Button.css';

const Button = (props) => {
	const { text, ...rest } = props;
	return (
		<button { ...rest }>
			{ props.text }
		</button>
	);
}

Button.propTypes = {
	className: PropTypes.string,
	disabled: PropTypes.bool.isRequired,
	text: PropTypes.string.isRequired,
	onClick: PropTypes.func,
}

Button.defaultProps = {
	className: base,
	disabled: false,
	text: 'Default text',
	onClick: null,
}

export default Button;
