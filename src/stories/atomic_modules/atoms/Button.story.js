import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { checkA11y } from 'storybook-addon-a11y';

import Button from './Button';
import { secondary } from '../../styles/components/Button.css';

storiesOf('ATOM: Button', module)
	.addDecorator(checkA11y)
	.add('Base button', () => (
		<Button onClick={ action('clicked') }/>
	))
	.add('Custom text', () => (
		<Button text='Custom text' onClick={ action('clicked') }/>
	))
	.add('Disabled button', () => (
		<Button text='Disabled button' disabled={true} onClick={ action('clicked') }/>
	))
	.add('Composed styles', () => (
		<Button text='Composed secondary style' className={ secondary } onClick={ action('clicked') }/>
	))
	.add('Disabled secondary button', () => (
		<Button text='Disabled secondary button' className={ secondary } disabled={true} onClick={ action('clicked') }/>
	));
