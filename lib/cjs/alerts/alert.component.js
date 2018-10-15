'use strict';

exports.__esModule = true;
exports.OCAlert = undefined;

var _class, _temp2; /* eslint-disable import/prefer-default-export */


var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactBootstrap = require('react-bootstrap');

var _reactIcons = require('@opuscapita/react-icons');

var _alerts = require('./alerts.actions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var OCAlert = exports.OCAlert = (_temp2 = _class = function (_React$PureComponent) {
  _inherits(OCAlert, _React$PureComponent);

  function OCAlert() {
    var _temp, _this, _ret;

    _classCallCheck(this, OCAlert);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$PureComponent.call.apply(_React$PureComponent, [this].concat(args))), _this), _this.handleAlertDismiss = function () {
      _alerts.OCAlert.closeAlert(_this.props.id);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  OCAlert.prototype.getIcon = function getIcon() {
    var names = {
      success: 'ok',
      info: 'exclamation',
      warning: 'alert',
      danger: 'error'
    };
    return _react2.default.createElement(_reactIcons.Icon, {
      type: 'indicator',
      name: names[this.props.type],
      width: 38,
      height: 38
    });
  };

  OCAlert.prototype.render = function render() {
    return _react2.default.createElement(
      _reactBootstrap.Alert,
      { bsStyle: this.props.type, onDismiss: this.handleAlertDismiss },
      _react2.default.createElement(
        'div',
        { className: 'alert-content' },
        _react2.default.createElement(
          'div',
          { className: 'alert-icon-container' },
          this.getIcon()
        ),
        _react2.default.createElement(
          'div',
          { className: 'alert-message-container' },
          this.props.message
        )
      )
    );
  };

  return OCAlert;
}(_react2.default.PureComponent), _class.propTypes = {
  id: _propTypes2.default.string.isRequired,
  type: _propTypes2.default.oneOf(['success', 'info', 'warning', 'danger']).isRequired,
  message: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.node]).isRequired
}, _temp2);