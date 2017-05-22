import React from 'react';
import PropTypes from 'prop-types';

import Label from '../atoms/Label';
import Input from '../atoms/Input'
import Button from '../atoms/Button';

import Layout from '../../styles/objects/Layout.css';
import SearchBox from '../../styles/components/SearchBox.css';

const SearchField = (props) => (
	<article className={ `${SearchBox.container} ${Layout.flexbox} ${Layout.flexflow__column}` } role='search' { ...props }>
		<Label htmlFor='search-input' text='Search by name' />
		<div>
			<Input id='search-input' type='search' />
			<Button text='Go' />
		</div>
	</article>
);

SearchField.propTypes = {
	Button: PropTypes.element,
	Input: PropTypes.element,
	Button: PropTypes.element,
}

export default SearchField;
