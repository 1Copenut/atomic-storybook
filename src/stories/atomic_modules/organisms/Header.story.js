import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import { checkA11y } from 'storybook-addon-a11y';

import Header from './Header';

storiesOf('ORGANISM: Header', module)
	.addDecorator(checkA11y)
	.add('Page header', () => (
		<Header />
	));
