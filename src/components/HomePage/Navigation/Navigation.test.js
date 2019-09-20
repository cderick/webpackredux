import React from 'react';
import { shallow } from 'enzyme';
import Navigation from './Navigation';

describe('Testing render of Navigation component', () => {
	it('renders without crashing', () => {
		shallow(<Navigation />);
	});
});
