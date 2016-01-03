import React from 'react';
import { Route } from 'react-router';

import App from './components/App';
import { LoginRoute, LogoutRoute, AuthenticatedRoute } from './loginFlux/index';
import LoginPage from './components/Login/LoginPage';
import RegisterPage from './components/Login/RegisterPage';
import ProfilePage from './components/Profile/ProfilePage';
import ResetPasswordPage from './components/Login/ResetPasswordPage';
import VerifyEmailPage from './components/Login/VerifyEmailPage';
import Home from './components/Home/Home';
import Tests from './components/Tests/Tests';
import Layout from './components/Layout/Layout';

const routes = (
  <Route component={App}>
    <LoginRoute path="/login" component={LoginPage} />
    <LogoutRoute path='/logout' />
    <Route path='/register' component={RegisterPage} />
    <Route path='/forgot' component={ResetPasswordPage} />
    <Route path='/verify' component={VerifyEmailPage} />
    <AuthenticatedRoute component={Layout}>
      <Route path="/" component={Home} />
      <Route path="/tests" component={Tests} />
      <Route path="/profile" component={ProfilePage} />
    </AuthenticatedRoute>
  </Route>
);

export default routes;
