import React from 'react';
import { shallow } from 'enzyme';
import Card from '../card';
const clickFn = jest.fn();

let wrapped = shallow(<Card repoName="reponame" onClick={clickFn} />);
describe('render card component', () => {
    it('should render the Card component correctly', () => {
        expect(wrapped).toMatchSnapshot();
    });
});