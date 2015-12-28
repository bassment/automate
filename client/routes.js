import React from 'react';
import { Route } from 'react-router';
import App from './components/Layout/App';
import { LoginRoute, AuthenticatedRoute } from './loginFlux/index';
import LoginPage from './components/Login/LoginPage';
import ProfilePage from './components/Login/ProfilePage';
import Home from './components/Home/Home';
import Tests from './components/Tests/Tests';

const routes = (
  <Route component={App}>
    <Route path="/" component={Home} />
    <Route path="/tests" component={Tests} />
    <LoginRoute path="/login" component={LoginPage} />
    <AuthenticatedRoute path="/profile" component={ProfilePage} />
  </Route>
);

export default routes;
