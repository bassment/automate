import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import 'babel-polyfill';
import 'normalize.css';
import './css/globals.css';

import React from 'react';
import ReactDOM from 'react-dom';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import ReactStormpath, { Router } from './loginFlux/index';
import routes from './routes';

// Expose globally
window.React = React;

ReactStormpath.init();

ReactDOM.render(
  <Router
    children={routes}
    history={createBrowserHistory()}/>,
  document.getElementById('root'));
