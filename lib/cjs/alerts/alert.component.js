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
}(_react2.default.PureComponent);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hbGVydHMvYWxlcnQuY29tcG9uZW50LmpzeCJdLCJuYW1lcyI6WyJPQ0FsZXJ0IiwiaGFuZGxlQWxlcnREaXNtaXNzIiwiT0NBbGVydEFjdGlvbnMiLCJjbG9zZUFsZXJ0IiwicHJvcHMiLCJpZCIsImdldEljb24iLCJuYW1lcyIsInN1Y2Nlc3MiLCJpbmZvIiwid2FybmluZyIsImRhbmdlciIsInR5cGUiLCJyZW5kZXIiLCJtZXNzYWdlIiwiUmVhY3QiLCJQdXJlQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7K2VBTEE7OztJQU9hQSxPLFdBQUFBLE87Ozs7Ozs7Ozs7OztnS0EyQlhDLGtCLEdBQXFCLFlBQU07QUFDekJDLHNCQUFlQyxVQUFmLENBQTBCLE1BQUtDLEtBQUwsQ0FBV0MsRUFBckM7QUFDRCxLOzs7b0JBbkJEQyxPLHNCQUFVO0FBQ1IsUUFBTUMsUUFBUTtBQUNaQyxlQUFTLElBREc7QUFFWkMsWUFBTSxhQUZNO0FBR1pDLGVBQVMsT0FIRztBQUlaQyxjQUFRO0FBSkksS0FBZDtBQU1BLFdBQ0UsOEJBQUMsZ0JBQUQ7QUFDRSxZQUFLLFdBRFA7QUFFRSxZQUFNSixNQUFNLEtBQUtILEtBQUwsQ0FBV1EsSUFBakIsQ0FGUjtBQUdFLGFBQU8sRUFIVDtBQUlFLGNBQVE7QUFKVixNQURGO0FBUUQsRzs7b0JBTURDLE0scUJBQVM7QUFDUCxXQUNFO0FBQUMsMkJBQUQ7QUFBQSxRQUFPLFNBQVMsS0FBS1QsS0FBTCxDQUFXUSxJQUEzQixFQUFpQyxXQUFXLEtBQUtYLGtCQUFqRDtBQUNFO0FBQUE7QUFBQSxVQUFLLFdBQVUsZUFBZjtBQUNFO0FBQUE7QUFBQSxZQUFLLFdBQVUsc0JBQWY7QUFBdUMsZUFBS0ssT0FBTDtBQUF2QyxTQURGO0FBRUU7QUFBQTtBQUFBLFlBQUssV0FBVSx5QkFBZjtBQUEwQyxlQUFLRixLQUFMLENBQVdVO0FBQXJEO0FBRkY7QUFERixLQURGO0FBT0QsRzs7O0VBdkMwQkMsZ0JBQU1DLGEiLCJmaWxlIjoiYWxlcnQuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L3ByZWZlci1kZWZhdWx0LWV4cG9ydCAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBBbGVydCB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XG5pbXBvcnQgeyBJY29uIH0gZnJvbSAnQG9wdXNjYXBpdGEvcmVhY3QtaWNvbnMnO1xuaW1wb3J0IHsgT0NBbGVydCBhcyBPQ0FsZXJ0QWN0aW9ucyB9IGZyb20gJy4vYWxlcnRzLmFjdGlvbnMnO1xuXG5leHBvcnQgY2xhc3MgT0NBbGVydCBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGlkOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgdHlwZTogUHJvcFR5cGVzLm9uZU9mKFsnc3VjY2VzcycsICdpbmZvJywgJ3dhcm5pbmcnLCAnZGFuZ2VyJ10pLmlzUmVxdWlyZWQsXG4gICAgbWVzc2FnZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgUHJvcFR5cGVzLm5vZGUsXG4gICAgXSkuaXNSZXF1aXJlZCxcbiAgfTtcblxuICBnZXRJY29uKCkge1xuICAgIGNvbnN0IG5hbWVzID0ge1xuICAgICAgc3VjY2VzczogJ29rJyxcbiAgICAgIGluZm86ICdleGNsYW1hdGlvbicsXG4gICAgICB3YXJuaW5nOiAnYWxlcnQnLFxuICAgICAgZGFuZ2VyOiAnZXJyb3InLFxuICAgIH07XG4gICAgcmV0dXJuIChcbiAgICAgIDxJY29uXG4gICAgICAgIHR5cGU9XCJpbmRpY2F0b3JcIlxuICAgICAgICBuYW1lPXtuYW1lc1t0aGlzLnByb3BzLnR5cGVdfVxuICAgICAgICB3aWR0aD17Mzh9XG4gICAgICAgIGhlaWdodD17Mzh9XG4gICAgICAvPlxuICAgICk7XG4gIH1cblxuICBoYW5kbGVBbGVydERpc21pc3MgPSAoKSA9PiB7XG4gICAgT0NBbGVydEFjdGlvbnMuY2xvc2VBbGVydCh0aGlzLnByb3BzLmlkKTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxBbGVydCBic1N0eWxlPXt0aGlzLnByb3BzLnR5cGV9IG9uRGlzbWlzcz17dGhpcy5oYW5kbGVBbGVydERpc21pc3N9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFsZXJ0LWNvbnRlbnRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFsZXJ0LWljb24tY29udGFpbmVyXCI+e3RoaXMuZ2V0SWNvbigpfTwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWxlcnQtbWVzc2FnZS1jb250YWluZXJcIj57dGhpcy5wcm9wcy5tZXNzYWdlfTwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvQWxlcnQ+KTtcbiAgfVxufVxuIl19