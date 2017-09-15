import { mount } from 'enzyme';

let wrapper;

export function mountToDoc (reactElem) {
    if (!document) {
        // Set up a basic DOM
        global.document = jsdom('<!doctype html><html><body></body></html>');
    }

    if (!wrapper) {
        wrapper = document.createElement('main');
        document.body.appendChild(wrapper);
    }

    const container = mount(reactElem);
    wrapper.innerHTML = '';
    wrapper.appendChild(container.getDOMNode());
    
    return container;
}
