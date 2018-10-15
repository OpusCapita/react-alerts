var _class, _temp;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* eslint-disable import/prefer-default-export */
import React from 'react';
import PropTypes from 'prop-types';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { alertsReducer } from './alerts.reducer';
import { OCAlert } from './alerts.actions';
import { OCAlerts } from './alerts.component';

import './alerts.scss';

var composeEnhancers = composeWithDevTools({ name: 'OCAlerts' });
var store = createStore(combineReducers({
  alerts: alertsReducer
}), undefined, composeEnhancers(applyMiddleware(thunk)));

OCAlert.setStore(store);

export var OCAlertsProvider = (_temp = _class = function (_React$PureComponent) {
  _inherits(OCAlertsProvider, _React$PureComponent);

  function OCAlertsProvider() {
    _classCallCheck(this, OCAlertsProvider);

    return _possibleConstructorReturn(this, _React$PureComponent.apply(this, arguments));
  }

  OCAlertsProvider.prototype.render = function render() {
    return React.createElement(
      Provider,
      { store: store },
      React.createElement(OCAlerts, { containerStyle: this.props.containerStyle })
    );
  };

  return OCAlertsProvider;
}(React.PureComponent), _class.propTypes = {
  containerStyle: PropTypes.object // eslint-disable-line
}, _class.defaultProps = {
  containerStyle: {}
}, _temp);