import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { checkA11y } from 'storybook-addon-a11y';

import Input from './Input';

storiesOf('ATOM: Input', module)
	.addDecorator(checkA11y)
	.add('Text input', () => (
		<Input />
	))
