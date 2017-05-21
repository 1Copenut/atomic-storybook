import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import { checkA11y } from 'storybook-addon-a11y';

import Input from './Input';

storiesOf('ATOM: Input', module)
	.addDecorator(checkA11y)
	.add('Text input', () => (
		<Input />
	))
