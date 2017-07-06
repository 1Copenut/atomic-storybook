import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from 'storybook-addon-a11y';

import Layout from '../../styles/objects/Layout.css';
import ButtonBar from './ButtonBar';

storiesOf('MOLECULE: Button Bar', module)
	.addDecorator(checkA11y)
	.add('Flexbox left aligned', () => (
		<ButtonBar />
	))
	.add('Flexbox centered', () => (
		<ButtonBar className={ Layout.flexbox__justifyCenter } />
	))
	.add('Flexbox right aligned', () => (
		<ButtonBar className={ Layout.flexbox__justifyEnd } />
	));
