import React from 'react';
import { action } from '@kadira/storybook';

import Button from '../atoms/Button';

import { flexbox } from '../../styles/objects/Layout.css';
import { inline__block } from '../../styles/objects/Lists.css';
import { secondary } from '../../styles/components/Button.css';

const ButtonNames = ['Music', 'Cinema', 'Broadcast', 'Streaming'];

const ButtonItem = ButtonNames.map((item, index) => {
	if(index === 0 ) {
		return (
			<li className={ inline__block } key={ index }>
				<Button className={ secondary } text={ item } />
			</li>
		);
	} else {
		return (
			<li className={ inline__block } key={ index }>
				<Button text={ item } />
			</li>
		);
	}
	
});

const ButtonBar = (props) => (
	<nav role='navigation' { ...props }>
		<ul>
			{ ButtonItem }
		</ul>
	</nav>
);

ButtonBar.propTypes = {
	className: React.PropTypes.string,
}

ButtonBar.defaultProps = {
	className: flexbox,
}

export default ButtonBar;
