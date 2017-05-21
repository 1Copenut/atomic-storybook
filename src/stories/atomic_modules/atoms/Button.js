import React from 'react';
import { base } from '../../styles/components/Button.css';

function Button(props) {
	const { text, ...rest } = props;
	return (
		<button { ...rest }>
			{ props.text }
		</button>
	);
}

Button.propTypes = {
	className: React.PropTypes.string,
	disabled: React.PropTypes.bool.isRequired,
	text: React.PropTypes.string.isRequired,
	onClick: React.PropTypes.func,
}

Button.defaultProps = {
	className: base,
	disabled: false,
	text: 'Default text',
	onClick: null,
}

export default Button;
