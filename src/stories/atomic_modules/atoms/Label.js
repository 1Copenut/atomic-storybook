import React from 'react';
import PropTypes from 'prop-types';
import { base } from '../../styles/components/Button.css';

function Label(props) {
	const { text, ...rest } = props;
	return (
		<label>{ text }</label>
	);
}

Label.propTypes = {
	
}

Label.defaultProps = {
	
}

export default Label;
