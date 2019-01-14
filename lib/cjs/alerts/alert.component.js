'use strict';

exports.__esModule = true;
exports.OCAlert = undefined;

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

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint-disable import/prefer-default-export */


var OCAlert = exports.OCAlert = function (_React$PureComponent) {
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
    var icons = {
      success: {
        type: 'indicator',
        name: 'ok',
        width: 16,
        height: 16,
        style: {
          marginLeft: '10px'
        }
      },
      info: {
        type: 'product',
        name: 'Info',
        width: 30,
        height: 30
      },
      warning: {
        type: 'indicator',
        name: 'warning',
        width: 25,
        height: 25,
        style: {
          marginLeft: '5px'
        }
      },
      danger: {
        type: 'indicator',
        name: 'error',
        width: 25,
        height: 25,
        style: {
          marginLeft: '5px'
        }
      }
    };
    return _react2.default.createElement(_reactIcons.Icon, icons[this.props.type]);
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
          'span',
          { className: 'alert-message-container' },
          this.props.message
        )
      )
    );
  };

  return OCAlert;
}(_react2.default.PureComponent);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hbGVydHMvYWxlcnQuY29tcG9uZW50LmpzeCJdLCJuYW1lcyI6WyJPQ0FsZXJ0IiwiaGFuZGxlQWxlcnREaXNtaXNzIiwiT0NBbGVydEFjdGlvbnMiLCJjbG9zZUFsZXJ0IiwicHJvcHMiLCJpZCIsImdldEljb24iLCJpY29ucyIsInN1Y2Nlc3MiLCJ0eXBlIiwibmFtZSIsIndpZHRoIiwiaGVpZ2h0Iiwic3R5bGUiLCJtYXJnaW5MZWZ0IiwiaW5mbyIsIndhcm5pbmciLCJkYW5nZXIiLCJyZW5kZXIiLCJtZXNzYWdlIiwiUmVhY3QiLCJQdXJlQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7K2VBTEE7OztJQU9hQSxPLFdBQUFBLE87Ozs7Ozs7Ozs7OztnS0FtRFhDLGtCLEdBQXFCLFlBQU07QUFDekJDLHNCQUFlQyxVQUFmLENBQTBCLE1BQUtDLEtBQUwsQ0FBV0MsRUFBckM7QUFDRCxLOzs7b0JBM0NEQyxPLHNCQUFVO0FBQ1IsUUFBTUMsUUFBUTtBQUNaQyxlQUFTO0FBQ1BDLGNBQU0sV0FEQztBQUVQQyxjQUFNLElBRkM7QUFHUEMsZUFBTyxFQUhBO0FBSVBDLGdCQUFRLEVBSkQ7QUFLUEMsZUFBTztBQUNMQyxzQkFBWTtBQURQO0FBTEEsT0FERztBQVVaQyxZQUFNO0FBQ0pOLGNBQU0sU0FERjtBQUVKQyxjQUFNLE1BRkY7QUFHSkMsZUFBTyxFQUhIO0FBSUpDLGdCQUFRO0FBSkosT0FWTTtBQWdCWkksZUFBUztBQUNQUCxjQUFNLFdBREM7QUFFUEMsY0FBTSxTQUZDO0FBR1BDLGVBQU8sRUFIQTtBQUlQQyxnQkFBUSxFQUpEO0FBS1BDLGVBQU87QUFDTEMsc0JBQVk7QUFEUDtBQUxBLE9BaEJHO0FBeUJaRyxjQUFRO0FBQ05SLGNBQU0sV0FEQTtBQUVOQyxjQUFNLE9BRkE7QUFHTkMsZUFBTyxFQUhEO0FBSU5DLGdCQUFRLEVBSkY7QUFLTkMsZUFBTztBQUNMQyxzQkFBWTtBQURQO0FBTEQ7QUF6QkksS0FBZDtBQW1DQSxXQUNFLDhCQUFDLGdCQUFELEVBQVVQLE1BQU0sS0FBS0gsS0FBTCxDQUFXSyxJQUFqQixDQUFWLENBREY7QUFHRCxHOztvQkFNRFMsTSxxQkFBUztBQUNQLFdBQ0U7QUFBQywyQkFBRDtBQUFBLFFBQU8sU0FBUyxLQUFLZCxLQUFMLENBQVdLLElBQTNCLEVBQWlDLFdBQVcsS0FBS1Isa0JBQWpEO0FBQ0U7QUFBQTtBQUFBLFVBQUssV0FBVSxlQUFmO0FBQ0U7QUFBQTtBQUFBLFlBQUssV0FBVSxzQkFBZjtBQUF1QyxlQUFLSyxPQUFMO0FBQXZDLFNBREY7QUFFRTtBQUFBO0FBQUEsWUFBTSxXQUFVLHlCQUFoQjtBQUNHLGVBQUtGLEtBQUwsQ0FBV2U7QUFEZDtBQUZGO0FBREYsS0FERjtBQVNELEc7OztFQWpFMEJDLGdCQUFNQyxhIiwiZmlsZSI6ImFsZXJ0LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9wcmVmZXItZGVmYXVsdC1leHBvcnQgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgQWxlcnQgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xuaW1wb3J0IHsgSWNvbiB9IGZyb20gJ0BvcHVzY2FwaXRhL3JlYWN0LWljb25zJztcbmltcG9ydCB7IE9DQWxlcnQgYXMgT0NBbGVydEFjdGlvbnMgfSBmcm9tICcuL2FsZXJ0cy5hY3Rpb25zJztcblxuZXhwb3J0IGNsYXNzIE9DQWxlcnQgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBpZDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIHR5cGU6IFByb3BUeXBlcy5vbmVPZihbJ3N1Y2Nlc3MnLCAnaW5mbycsICd3YXJuaW5nJywgJ2RhbmdlciddKS5pc1JlcXVpcmVkLFxuICAgIG1lc3NhZ2U6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgIFByb3BUeXBlcy5ub2RlLFxuICAgIF0pLmlzUmVxdWlyZWQsXG4gIH07XG5cbiAgZ2V0SWNvbigpIHtcbiAgICBjb25zdCBpY29ucyA9IHtcbiAgICAgIHN1Y2Nlc3M6IHtcbiAgICAgICAgdHlwZTogJ2luZGljYXRvcicsXG4gICAgICAgIG5hbWU6ICdvaycsXG4gICAgICAgIHdpZHRoOiAxNixcbiAgICAgICAgaGVpZ2h0OiAxNixcbiAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICBtYXJnaW5MZWZ0OiAnMTBweCcsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgaW5mbzoge1xuICAgICAgICB0eXBlOiAncHJvZHVjdCcsXG4gICAgICAgIG5hbWU6ICdJbmZvJyxcbiAgICAgICAgd2lkdGg6IDMwLFxuICAgICAgICBoZWlnaHQ6IDMwLFxuICAgICAgfSxcbiAgICAgIHdhcm5pbmc6IHtcbiAgICAgICAgdHlwZTogJ2luZGljYXRvcicsXG4gICAgICAgIG5hbWU6ICd3YXJuaW5nJyxcbiAgICAgICAgd2lkdGg6IDI1LFxuICAgICAgICBoZWlnaHQ6IDI1LFxuICAgICAgICBzdHlsZToge1xuICAgICAgICAgIG1hcmdpbkxlZnQ6ICc1cHgnLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIGRhbmdlcjoge1xuICAgICAgICB0eXBlOiAnaW5kaWNhdG9yJyxcbiAgICAgICAgbmFtZTogJ2Vycm9yJyxcbiAgICAgICAgd2lkdGg6IDI1LFxuICAgICAgICBoZWlnaHQ6IDI1LFxuICAgICAgICBzdHlsZToge1xuICAgICAgICAgIG1hcmdpbkxlZnQ6ICc1cHgnLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9O1xuICAgIHJldHVybiAoXG4gICAgICA8SWNvbiB7Li4uaWNvbnNbdGhpcy5wcm9wcy50eXBlXX0gLz5cbiAgICApO1xuICB9XG5cbiAgaGFuZGxlQWxlcnREaXNtaXNzID0gKCkgPT4ge1xuICAgIE9DQWxlcnRBY3Rpb25zLmNsb3NlQWxlcnQodGhpcy5wcm9wcy5pZCk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8QWxlcnQgYnNTdHlsZT17dGhpcy5wcm9wcy50eXBlfSBvbkRpc21pc3M9e3RoaXMuaGFuZGxlQWxlcnREaXNtaXNzfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbGVydC1jb250ZW50XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbGVydC1pY29uLWNvbnRhaW5lclwiPnt0aGlzLmdldEljb24oKX08L2Rpdj5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJhbGVydC1tZXNzYWdlLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAge3RoaXMucHJvcHMubWVzc2FnZX1cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9BbGVydD4pO1xuICB9XG59XG4iXX0=