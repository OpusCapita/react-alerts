var _class, _temp2;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* eslint-disable import/prefer-default-export */
import React from 'react';
import PropTypes from 'prop-types';
import { Alert } from 'react-bootstrap';
import { Icon } from '@opuscapita/react-icons';
import { OCAlert as OCAlertActions } from './alerts.actions';

export var OCAlert = (_temp2 = _class = function (_React$PureComponent) {
  _inherits(OCAlert, _React$PureComponent);

  function OCAlert() {
    var _temp, _this, _ret;

    _classCallCheck(this, OCAlert);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$PureComponent.call.apply(_React$PureComponent, [this].concat(args))), _this), _this.handleAlertDismiss = function () {
      OCAlertActions.closeAlert(_this.props.id);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  OCAlert.prototype.getIcon = function getIcon() {
    var names = {
      success: 'ok',
      info: 'exclamation',
      warning: 'alert',
      danger: 'error'
    };
    return React.createElement(Icon, {
      type: 'indicator',
      name: names[this.props.type],
      width: 38,
      height: 38
    });
  };

  OCAlert.prototype.render = function render() {
    return React.createElement(
      Alert,
      { bsStyle: this.props.type, onDismiss: this.handleAlertDismiss },
      React.createElement(
        'div',
        { className: 'alert-content' },
        React.createElement(
          'div',
          { className: 'alert-icon-container' },
          this.getIcon()
        ),
        React.createElement(
          'div',
          { className: 'alert-message-container' },
          this.props.message
        )
      )
    );
  };

  return OCAlert;
}(React.PureComponent), _class.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['success', 'info', 'warning', 'danger']).isRequired,
  message: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired
}, _temp2);