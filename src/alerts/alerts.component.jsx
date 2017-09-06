/* eslint-disable import/prefer-default-export */
/* eslint-disable react/no-array-index-key */

import React from 'react';
import PropTypes from 'prop-types';
import { createStore,
         applyMiddleware,
         compose,
         combineReducers } from 'redux';
import { connect, Provider } from 'react-redux';
import { IntlProvider, intlReducer } from 'react-intl-redux';
import thunk from 'redux-thunk';
import { alertsReducer } from './alerts.reducer';
import { OCAlert as OCAlertElement } from './alert.component.jsx'; // eslint-disable-line import/extensions
import { OCAlert } from './alerts.actions';

import './alerts.scss';

const store = createStore(
  combineReducers({
    alertsReducer,
    intl: intlReducer,
  }),
  compose(applyMiddleware(thunk)),
);

OCAlert.setStore(store);

const OCAlertsComponent = function OCAlertsComponent(props) {
  return (
    <Provider store={store}>
      <IntlProvider>
        <div id="global-notification">
          { props.alerts.map((alert, i) =>
            <OCAlertElement key={i} {...alert} />,
          )}
        </div>
      </IntlProvider>
    </Provider>
  );
};

OCAlertsComponent.propTypes = {
  alerts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['success', 'info', 'warning', 'danger']).isRequired,
    message: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.arrayOf(PropTypes.string),
    ]).isRequired,
    translate: PropTypes.bool.isRequired,
    values: PropTypes.objectOf(PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ])),
  })).isRequired,
};

const mapStateToProps = state => ({
  alerts: state.alertsReducer,
});

export const OCAlerts = connect(
  mapStateToProps,
)(OCAlertsComponent);
