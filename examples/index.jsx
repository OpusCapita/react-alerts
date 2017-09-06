/* eslint-disable no-underscore-dangle */
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import { createStore,
         applyMiddleware,
         compose,
         combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { IntlProvider, intlReducer } from 'react-intl-redux';
import thunk from 'redux-thunk';
import AlertsView from './components/alerts-view/alerts-view.component';
import { alertsReducer, OCAlert } from '../src/index';

import './app.component.scss';


const composeEnhancers = (process.env.NODE_ENV !== 'production' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

/* const store = createStore(
  combineReducers({
    alertsReducer,
    intl: intlReducer,
  }),
  composeEnhancers(applyMiddleware(thunk)),
);

OCAlert.setStore(store); */

render((
  <Router history={hashHistory}>
    <Route path="/" component={AlertsView} />
  </Router>
), document.getElementById('oc-examples'));
