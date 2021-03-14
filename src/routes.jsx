import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Todo from './pages/Todo';
import Home from './pages/Home';
import Navbar from './components/Navbar';

const routes = [{
  component: Home,
  path: '/',
  name: 'home',
}, {
  component: Todo,
  path: '/todo',
  name: 'Todo',
}];

const Routes = () => (
  <BrowserRouter>
    <Navbar routes={routes} title="Pitang" />
    <Switch>
      {routes.map(({ path, component }, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <Route key={index} exact path={path} component={component} />
      ))}
    </Switch>
  </BrowserRouter>
);

export default Routes;
