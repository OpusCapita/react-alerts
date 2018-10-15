'use strict';

exports.__esModule = true;
exports.OCAlerts = undefined;

var _dec, _class, _class2, _temp; /* eslint-disable import/prefer-default-export */


var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactImmutableProptypes = require('react-immutable-proptypes');

var _reactImmutableProptypes2 = _interopRequireDefault(_reactImmutableProptypes);

var _reactRedux = require('react-redux');

var _alert = require('./alert.component');

require('./alerts.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var mapStateToProps = function mapStateToProps(state) {
  return {
    alerts: state.alerts
  };
};

var OCAlerts = exports.OCAlerts = (_dec = (0, _reactRedux.connect)(mapStateToProps), _dec(_class = (_temp = _class2 = function (_React$PureComponent) {
  _inherits(OCAlerts, _React$PureComponent);

  function OCAlerts() {
    _classCallCheck(this, OCAlerts);

    return _possibleConstructorReturn(this, _React$PureComponent.apply(this, arguments));
  }

  OCAlerts.prototype.render = function render() {
    return _react2.default.createElement(
      'div',
      { id: 'global-notification', style: this.props.containerStyle },
      this.props.alerts.map(function (alert) {
        return _react2.default.createElement(_alert.OCAlert, {
          key: alert.get('id'),
          id: alert.get('id'),
          type: alert.get('type'),
          message: alert.get('message')
        });
      })
    );
  };

  return OCAlerts;
}(_react2.default.PureComponent), _class2.propTypes = {
  alerts: _reactImmutableProptypes2.default.listOf(_reactImmutableProptypes2.default.mapContains({
    id: _propTypes2.default.string.isRequired,
    type: _propTypes2.default.oneOf(['success', 'info', 'warning', 'danger']).isRequired,
    message: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.node]).isRequired
  })).isRequired,
  containerStyle: _propTypes2.default.object // eslint-disable-line
}, _class2.defaultProps = {
  containerStyle: {}
}, _temp)) || _class);