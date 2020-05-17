import React from 'react';
import { shallow } from 'enzyme';
import Loader from '../loader';
let wrapped = shallow(<Loader />);
describe('render loader component', () => {
    it('should render the Loader component correctly', () => {
        expect(wrapped).toMatchSnapshot();
    });
});