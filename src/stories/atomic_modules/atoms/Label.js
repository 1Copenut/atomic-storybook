import React from 'react';
import PropTypes from 'prop-types';

function Label(props) {
	const { text, ...rest } = props;
	return (
		<label { ...rest }>{ text }</label>
	);
}

Label.propTypes = {
	className: PropTypes.string,
	htmlFor: PropTypes.string,
	text: PropTypes.string.isRequired,
}

Label.defaultProps = {
	text: 'Input label',
}

export default Label;
