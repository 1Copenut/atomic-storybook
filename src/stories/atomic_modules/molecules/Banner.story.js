import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from 'storybook-addon-a11y';

import Banner from './Banner';

storiesOf('MOLECULE: Banner', module)
	.addDecorator(checkA11y)
	.add('Basic banner', () => (
		<Banner />
	));
