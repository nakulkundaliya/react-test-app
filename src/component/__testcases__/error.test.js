import React from 'react';
import { shallow } from 'enzyme';
import Error from '../error';
let wrapped = shallow(<Error error="Not found" />);
describe('render error component', () => {
    it('should render the Error component correctly', () => {
        expect(wrapped).toMatchSnapshot();
    });
});