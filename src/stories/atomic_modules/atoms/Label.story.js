import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import { checkA11y } from 'storybook-addon-a11y';

import Label from './Label';

storiesOf('ATOM: Label', module)
	.addDecorator(checkA11y)
	.add('Basic label', () => (
		<Label text='Input name' />
	));
