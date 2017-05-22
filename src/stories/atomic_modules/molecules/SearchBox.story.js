import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import { checkA11y } from 'storybook-addon-a11y';

import SearchBox from './SearchBox';

storiesOf('MOLECULE: Seachbox', module)
	.addDecorator(checkA11y)
	.add('Standard search', () => (
		<SearchBox />
	));
