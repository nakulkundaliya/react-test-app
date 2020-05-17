import React from 'react';
import { shallow } from 'enzyme';
import Header from '../header';
let wrapped = shallow(<Header title="Title" />);
describe('render header component', () => {
    it('should render the Header component correctly', () => {
        expect(wrapped).toMatchSnapshot();
    });
});