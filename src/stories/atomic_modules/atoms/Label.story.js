import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from 'storybook-addon-a11y';

import Label from './Label';

storiesOf('ATOM: Label', module)
	.addDecorator(checkA11y)
	.add('Basic label', () => (
		<Label text='Input name' />
	));
