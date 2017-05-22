import React from 'react';
import sinon from 'sinon';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import Button from '../../stories/atomic_modules/atoms/Button';

let wrapper;

describe('ATOM: Button -- component behavior', () => {
	beforeEach(() => {
		wrapper = shallow(
			<Button className='foo bar' />
		);
	});

	it('Renders without blowing up', () => {
		expect(wrapper).to.exist;
	});

	it('Renders the proper HTML', () => {
		expect(wrapper.type()).to.equal('button');
	});

	it('Passes the default name prop', () => {
		expect(wrapper.text()).to.equal('Default text');
	});

	it('Passes the expected class name props', () => {
		expect(wrapper.hasClass('foo')).to.equal(true);
		expect(wrapper.hasClass('bar')).to.equal(true);
	});

	it('Passes a custom name prop', () => {
		wrapper.setProps({ text: 'Custom text' });
		expect(wrapper.text()).to.equal('Custom text');
	});
	

	it('Passes the disabled prop a true value', () => {
		wrapper.setProps({ disabled: true });
		expect(wrapper.prop('disabled')).to.equal(true);
	});

	it('Registers the click event', () => {
		const spy = sinon.spy();

		wrapper.setProps({ onClick: spy });
		wrapper.find('button').simulate('click');
		expect(spy.calledOnce).to.be.true;
	});

	it('Does not register the click event when disabled', () => {
		const spy = sinon.spy();
		let customWrapper = mount(
			<Button onClick={spy} disabled={true} />
		);

		customWrapper.find('button').simulate('click');
		expect(spy.calledOnce).to.be.false;
	});
});

