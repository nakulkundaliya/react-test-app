import React from 'react';
import { createMemoryHistory } from 'history';
import { shallow } from 'enzyme';
import Home from '../home';
describe('render home', () => {
    let component;
    beforeEach(() => {
        component = shallow(<Home />);
    });
    it('should render the home correctly', () => {
        expect(component).toMatchSnapshot();
    });

    it('should render the home route', () => {
        const history = createMemoryHistory({
            initialEntries: ['']
        });
        expect(history.location.pathname).toEqual('/');

    })
});