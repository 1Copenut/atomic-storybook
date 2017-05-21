import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import TypeHeader from '../../stories/atomic_modules/atoms/TypeHeader';

let wrapper;

describe('ATOM: Type Header -- component behavior', () => {
	it('Renders without blowing up', () => {
		const wrapper = shallow(
			<TypeHeader className='foo bar' />
		);

		expect(wrapper).to.exist;
	});

	it('Passes the expected class name props', () => {
		const wrapper = shallow(
			<TypeHeader className='foo bar' />
		);

		expect(wrapper.hasClass('foo')).to.equal(true);
		expect(wrapper.hasClass('bar')).to.equal(true);
	});

	it('Renders an <h1> element', () => {
		const wrapper = shallow(
			<TypeHeader className='foo bar' />
		);

		expect(wrapper.find('h1').length).to.equal(1);
	});

	it('Renders an <h2> element', () => {
		const wrapper = shallow(
			<TypeHeader className='foo bar' elem='h2' />
		);

		expect(wrapper.find('h2').length).to.equal(1);
	});

	it('Renders an <h3> element', () => {
		const wrapper = shallow(
			<TypeHeader className='foo bar' elem='h3' />
		);

		expect(wrapper.find('h3').length).to.equal(1);
	});

	it('Renders an <h4> element', () => {
		const wrapper = shallow(
			<TypeHeader className='foo bar' elem='h4' />
		);

		expect(wrapper.find('h4').length).to.equal(1);
	});

	it('Renders an <h5> element', () => {
		const wrapper = shallow(
			<TypeHeader className='foo bar' elem='h5' />
		);

		expect(wrapper.find('h5').length).to.equal(1);
	});

	it('Renders an <h6> element', () => {
		const wrapper = shallow(
			<TypeHeader className='foo bar' elem='h6' />
		);

		expect(wrapper.find('h6').length).to.equal(1);
	});
});

