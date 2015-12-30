import React from 'react';
import { Route } from 'react-router';

import App from './components/App';
import { LoginRoute, AuthenticatedRoute } from './loginFlux/index';
import LoginPage from './components/Login/LoginPage';
import ProfilePage from './components/Profile/ProfilePage';
import Home from './components/Home/Home';
import Tests from './components/Tests/Tests';
import Layout from './components/Layout/Layout';

const routes = (
  <Route component={App}>
    <LoginRoute path="/login" component={LoginPage} />
      <AuthenticatedRoute component={Layout}>
      <Route path="/" component={Home} />
      <Route path="/tests" component={Tests} />
      <Route path="/profile" component={ProfilePage} />
    </AuthenticatedRoute>
  </Route>
);

export default routes;
