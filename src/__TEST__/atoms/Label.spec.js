import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import Label from '../../stories/atomic_modules/atoms/Label';

let wrapper;

describe('ATOM: Label -- component behavior', () => {
	beforeEach(() => {
		wrapper = shallow(
			<Label className='foo bar' />
		);
	});

	it('Renders without blowing up', () => {
		expect(wrapper).to.exist;
	});

	it('Renders the proper HTML', () => {
		expect(wrapper.type()).to.equal('label');
	});

	it('Passes the default name prop', () => {
		expect(wrapper.text()).to.equal('Input label');
	});

	it('Passes the expected class name props', () => {
		expect(wrapper.hasClass('foo')).to.equal(true);
		expect(wrapper.hasClass('bar')).to.equal(true);
	});

	it('Passes a custom name prop', () => {
		wrapper.setProps({ text: 'Custom text' });
		expect(wrapper.text()).to.equal('Custom text');
	});

	it('Passes a custom for prop', () => {
		wrapper.setProps({ htmlFor: 'input-1' });
		expect(wrapper.prop('htmlFor')).to.equal('input-1');
	});
});

