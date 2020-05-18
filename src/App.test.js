import React from 'react';
import { shallow, mount } from 'enzyme';

import { createMemoryHistory } from "history";
import { Router, MemoryRouter } from "react-router";
import App from './App';
import Home from '../src/container/home';
import Projects from '../src/container/projects';
import ProjectDetails from '../src/container/project-details';
import NotFound from '../src/container/not-found'
let wrapped = shallow(<App />);
describe('render App ', () => {
  it('should render the App correctly', () => {
    expect(wrapped).toMatchSnapshot();
  });


  it('render home component', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={[ '/' ]}>
        <App/>
      </MemoryRouter>
    );
    expect(wrapper.find(Home)).toHaveLength(1);

  })

});