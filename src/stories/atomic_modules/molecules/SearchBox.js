import React from 'react';
import PropTypes from 'prop-types';

import Label from '../atoms/Label';
import Input from '../atoms/Input'
import Button from '../atoms/Button';

import Layout from '../../styles/objects/Layout.css';
import SearchBoxStyles from '../../styles/components/SearchBox.css';

function SearchBox(props) {
	const { labelText, placeholderText, ...rest } = props;

	return (
		<section className={ `${SearchBoxStyles.container} ${Layout.flexbox} ${Layout.flexflow__column}` } role='search' { ...rest }>
			<Label htmlFor='search-input' text='Search by name' />
			<div>
				<Input id='search-input' type='search' placeholder={ placeholderText } />
				<Button text='Go' />
			</div>
		</section>
	);
};

SearchBox.propTypes = {
	Button: PropTypes.element,
	Input: PropTypes.element,
	Button: PropTypes.element,
}

export default SearchBox;
