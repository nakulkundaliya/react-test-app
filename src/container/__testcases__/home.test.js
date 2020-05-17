import React from 'react';
import { shallow } from 'enzyme';
import Home from '../home';
let wrapped = shallow(<Home />);
describe('render home', () => {
    it('should render the home correctly', () => {
        // expect(wrapped).toMatchSnapshot();
    });
});