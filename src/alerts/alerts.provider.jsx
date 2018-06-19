/* eslint-disable import/prefer-default-export */
import React from 'react';
import PropTypes from 'prop-types';
import {
  createStore,
  applyMiddleware,
  combineReducers,
} from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { alertsReducer } from './alerts.reducer';
import { OCAlert } from './alerts.actions';
import { OCAlerts } from './alerts.component';

import './alerts.scss';

const composeEnhancers = composeWithDevTools({ name: 'OCAlerts' });
const store = createStore(
  combineReducers({
    alerts: alertsReducer,
  }),
  undefined,
  composeEnhancers(applyMiddleware(thunk)),
);

OCAlert.setStore(store);

export class OCAlertsProvider extends React.PureComponent {
  static propTypes = {
    containerStyle: PropTypes.object, // eslint-disable-line
  }

  static defaultProps = {
    containerStyle: {},
  }

  render() {
    return (
      <Provider store={store}>
        <OCAlerts containerStyle={this.props.containerStyle} />
      </Provider>
    );
  }
}
