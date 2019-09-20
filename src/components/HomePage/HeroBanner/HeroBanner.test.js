import React from 'react';
import { shallow } from 'enzyme';
import HeroBanner from './HeroBanner';

describe('Testing render of HeroBanner component', () => {
	it('renders without crashing', () => {
		shallow(<HeroBanner />);
	});
});
