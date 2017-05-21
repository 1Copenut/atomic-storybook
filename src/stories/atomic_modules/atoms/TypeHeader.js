import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/elements/Typography.css';

function TypeHeader(props) {
	const { elem, text, ...rest } = props;

	switch(elem) {
		case 'h6':
			return (
				<h6 { ...rest }>
					{ props.text }
				</h6>
			);

		case 'h5':
			return (
				<h5 { ...rest }>
					{ props.text }
				</h5>
			);

		case 'h4':
			return (
				<h4 { ...rest }>
					{ props.text }
				</h4>
			);

		case 'h3':
			return (
				<h3 { ...rest }>
					{ props.text }
				</h3>
			);

		case 'h2':
			return (
				<h2 { ...rest }>
					{ props.text }
				</h2>
			);

		case 'h1':
			return (
				<h1 { ...rest }>
					{ props.text }
				</h1>
			);
	}
}

TypeHeader.propTypes = {
	className: PropTypes.string,
	elem: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
}

TypeHeader.defaultProps = {
	elem: 'h1',
	text: 'Header level one',
}

export default TypeHeader;
