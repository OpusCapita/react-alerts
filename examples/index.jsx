/* eslint-disable no-underscore-dangle */
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import AlertsView from './components/alerts-view/alerts-view.component';

import './app.component.scss';

render((
  <Router history={hashHistory}>
    <Route path="/" component={AlertsView} />
  </Router>
), document.getElementById('oc-examples'));
