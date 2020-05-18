import React from 'react';
import {
  Route,
  BrowserRouter,
  Switch
} from 'react-router-dom';
import Home from './container/home';
import Projects from './container/projects';
import ProjectDetails from './container/project-details'
import NotFound from './container/not-found'
const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/:name" component={Projects} />
          <Route exact path="/:name/:projectid" component={ProjectDetails} />
          <Route exact component={NotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
