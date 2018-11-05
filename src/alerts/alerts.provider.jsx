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

export class OCAlertsProvider extends React.PureComponent {
  static propTypes = {
    containerStyle: PropTypes.object, // eslint-disable-line
  }

  static defaultProps = {
    containerStyle: {},
  }

  constructor(props) {
    super(props);
    const composeEnhancers = composeWithDevTools({ name: 'OCAlerts' });
    if (!this.store) {
      this.store = createStore(
        combineReducers({
          alerts: alertsReducer,
        }),
        undefined,
        composeEnhancers(applyMiddleware(thunk)),
      );
    }
    OCAlert.setStore(this.store);
  }

  render() {
    return (
      <Provider store={this.store}>
        <OCAlerts containerStyle={this.props.containerStyle} />
      </Provider>
    );
  }
}
