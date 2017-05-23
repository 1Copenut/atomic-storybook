import React from 'react';
import PropTypes from 'prop-types';

import Banner from '../molecules/Banner';
import SearchBox from '../molecules/SearchBox';
import ButtonBar from '../molecules/ButtonBar';

import Layout from '../../styles/objects/Layout.css';
import HeaderStyles from '../../styles/components/Header.css';

const Header = (props) => (
	<header className={ `${HeaderStyles.container} ${Layout.flexbox}` }>
		<Banner />
		<SearchBox placeholderText='Search by name' />
		<ButtonBar className={ `${Layout.flexbox__justifyCenter} ${HeaderStyles.navigation}` } />
	</header>
);

Header.propTypes = {
	Banner: PropTypes.element,
	SearchBox: PropTypes.element,
}

export default Header;
