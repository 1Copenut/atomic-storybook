import React from 'react';
import sinon from 'sinon';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import Input from '../../stories/atomic_modules/atoms/Input';

let wrapper;

describe('ATOM: Button -- component behavior', () => {
	beforeEach(() => {
		wrapper = shallow(
			<Input className='foo bar' value='' />
		);
	});

	it('Renders without blowing up', () => {
		expect(wrapper).to.exist;
	});

	it('Renders the proper HTML', () => {
		expect(wrapper.type()).to.equal('input');
	});

	it('Should have type text', () => {
		expect(wrapper.prop('type')).to.equal('text');
	});

	it('Should have an empty value string', () => {
		expect(wrapper.prop('value')).to.equal('');
	});

	it('Passes the expected class name props', () => {
		expect(wrapper.hasClass('foo')).to.equal(true);
		expect(wrapper.hasClass('bar')).to.equal(true);
	});

	it('Passes a custom type prop to create an email input', () => {
		wrapper.setProps({ type: 'email' });
		expect(wrapper.prop('type')).to.equal('email');
	});
	

	it('Passes the disabled prop a true value', () => {
		wrapper.setProps({ disabled: true });
		expect(wrapper.prop('disabled')).to.equal(true);
	});

	it('Updates value on change', () => {
		wrapper.find('input').simulate('change', { target: { value: 'Hello world!' } });
		expect(wrapper.prop('value')).to.equal('Hello world!');
	})
});

