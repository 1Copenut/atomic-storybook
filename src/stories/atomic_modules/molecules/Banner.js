import React from 'react';
import PropTypes from 'prop-types';

import TypeHeader from '../atoms/TypeHeader';

import { flexbox } from '../../styles/objects/Layout.css';
import BannerStyles from '../../styles/components/Banner.css';

const Banner = (props) => (
	<section className={ `${BannerStyles.container} ${flexbox}` } role='banner' { ...props }>
		<TypeHeader className={ `${BannerStyles.header}` }text='Acme Products Catalog' />
	</section>
);

Banner.propTypes = {
	Typeheader: PropTypes.element,
}

export default Banner;
