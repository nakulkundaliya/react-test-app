import React from 'react';
import { createMemoryHistory } from 'history';
import { shallow, mount } from 'enzyme';
import Home from '../home';
describe('render home', () => {
    let container;
    const history = {
        push: jest.fn(),
    }
    beforeEach(() => {
        container = shallow(<Home />);
    });
    it('should render the home correctly', () => {
        expect(container).toMatchSnapshot();
    });

    it('should render the home route', () => {
        const history = createMemoryHistory({
            initialEntries: ['']
        });
        expect(history.location.pathname).toEqual('/');
    });

    it('should set username', () => {
        const container = mount(<Home />);
        const input = container.find('input').at(0);
        input.instance().value = 'nakul';
        input.simulate('change');


    });

    // it('calls onSubmit prop function when form is submitted', () => {
    //     const onSubmitFn = jest.fn();
    //     const form = component.find('form');
    //     form.simulate('submit');
    //     expect(onSubmitFn).toHaveBeenCalledTimes(1);
    // });
});