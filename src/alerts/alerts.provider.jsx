/* eslint-disable import/prefer-default-export */

import React from 'react';
import { createStore,
         applyMiddleware,
         compose,
         combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { IntlProvider, intlReducer } from 'react-intl-redux';
import thunk from 'redux-thunk';
import { alertsReducer } from './alerts.reducer';
import { OCAlert } from './alerts.actions';
import { OCAlerts } from './alerts.component';

import './alerts.scss';

const store = createStore(
  combineReducers({
    alerts: alertsReducer,
    intl: intlReducer,
  }),
  compose(applyMiddleware(thunk)),
);

OCAlert.setStore(store);

export const OCAlertsProvider = function OCAlertsProvider() {
  return (
    <Provider store={store}>
      <IntlProvider>
        <OCAlerts />
      </IntlProvider>
    </Provider>
  );
};
