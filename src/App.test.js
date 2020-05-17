import React from 'react';
import { shallow, mount } from 'enzyme';

import { createMemoryHistory } from "history";
import { Router } from "react-router";
import App from './App';
import Home from '../src/container/home';
import NotFound from '../src/container/not-found'
let wrapped = shallow(<App />);
describe('render App ', () => {
  it('should render the App correctly', () => {
    expect(wrapped).toMatchSnapshot();
  });

  it('valid path should not redirect to 404', () => {
    const history = createMemoryHistory();

    const wrapper = mount(
      <Router history={history}>
        <App />
      </Router>,
    );
    expect(history.location.pathname).toBe("/");

  });

});