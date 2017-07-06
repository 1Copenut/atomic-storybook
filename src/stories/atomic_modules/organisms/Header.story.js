import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { checkA11y } from 'storybook-addon-a11y';

import Header from './Header';

storiesOf('ORGANISM: Header', module)
	.addDecorator(checkA11y)
	.add('Page header', () => (
		<Header />
	));
