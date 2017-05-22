import { configure } from '@kadira/storybook';

import './styles/generic/Normalize.css';
import './styles/generic/BoxSizing.css';
import './styles/generic/Typography.css';

import './styles/elements/Forms.css';
import './styles/elements/Lists.css';
import './styles/elements/Typography.css';

import './styles/objects/Layout.css';
import './styles/objects/Lists.css';

const req = require.context('./', true, /.story.js$/);

function loadStories() {
	req.keys().forEach(req);
}

configure(loadStories, module);
