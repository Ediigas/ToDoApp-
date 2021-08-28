import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import StoreProvider from 'components/Store/Provider';
import RoutesPrivate from 'components/Routes/private/Private';
import Todo from './Todo/Todo';
import Login from './Login/Login';

const PagesRoot = () => (
  <Router>
    <StoreProvider>
    <Switch>
      <Route path="/login" component={Login} />
      <RoutesPrivate path="/" component={Todo} />
    </Switch>
    </StoreProvider>
  </Router>
)


export default PagesRoot;
