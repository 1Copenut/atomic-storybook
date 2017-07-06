import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { checkA11y } from 'storybook-addon-a11y';

import TypeHeader from './TypeHeader';

storiesOf('ATOM: Type Header', module)
	.addDecorator(checkA11y)
	.add('Header 1', () => (
		<TypeHeader />
	))
	.add('Header 2', () => (
		<TypeHeader elem='h2' text='Header level two' />
	))
	.add('Header 3', () => (
		<TypeHeader elem='h3' text='Header level three' />
	))
	.add('Header 4', () => (
		<TypeHeader elem='h4' text='Header level four' />
	))
	.add('Header 5', () => (
		<TypeHeader elem='h5' text='Header level five' />
	))
	.add('Header 6', () => (
		<TypeHeader elem='h6' text='Header level six' />
	));
