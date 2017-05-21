import React from 'react';
import sinon from 'sinon';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import ButtonBar from '../../stories/atomic_modules/molecules/ButtonBar';

let wrapper; 

describe('MOLECULE: Button Bar -- component behavior', () => {
	beforeEach(() => {
		wrapper = shallow(
			<ButtonBar className='foo bar' />
		);
	});

	it('Renders without blowing up', () => {
		expect(wrapper).to.exist;
	});

	it('Passes the expected class name props', () => {
		expect(wrapper.hasClass('foo')).to.equal(true);
		expect(wrapper.hasClass('bar')).to.equal(true);
	});

	it('Renders exactly 1 <nav> element', () => {
		expect(wrapper.type()).to.equal('nav');
	});
	
	it('Renders exactly 1 <ul> element', () => {
		expect(wrapper.find('ul').length).to.equal(1);
	});

	it('Renders exactly 4 <li> elements', () => {
		expect(wrapper.find('li').length).to.equal(4);
	});

	it('Renders exactly 4 <button> elements', () => {
		let customWrapper = mount(
			<ButtonBar />
		);

		let customElement = customWrapper.find('button');
		expect(customElement.length).to.equal(4);
	});
});