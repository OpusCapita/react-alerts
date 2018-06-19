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
        this.getIcon(),
        _react2.default.createElement(
          'span',
          null,
          this.props.message
        )
      )
    );
  };

  return OCAlert;
}(_react2.default.PureComponent);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hbGVydHMvYWxlcnQuY29tcG9uZW50LmpzeCJdLCJuYW1lcyI6WyJPQ0FsZXJ0IiwiaGFuZGxlQWxlcnREaXNtaXNzIiwiT0NBbGVydEFjdGlvbnMiLCJjbG9zZUFsZXJ0IiwicHJvcHMiLCJpZCIsImdldEljb24iLCJuYW1lcyIsInN1Y2Nlc3MiLCJpbmZvIiwid2FybmluZyIsImRhbmdlciIsInR5cGUiLCJyZW5kZXIiLCJtZXNzYWdlIiwiUmVhY3QiLCJQdXJlQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7K2VBTEE7OztJQU9hQSxPLFdBQUFBLE87Ozs7Ozs7Ozs7OztnS0EyQlhDLGtCLEdBQXFCLFlBQU07QUFDekJDLHNCQUFlQyxVQUFmLENBQTBCLE1BQUtDLEtBQUwsQ0FBV0MsRUFBckM7QUFDRCxLOzs7b0JBbkJEQyxPLHNCQUFVO0FBQ1IsUUFBTUMsUUFBUTtBQUNaQyxlQUFTLElBREc7QUFFWkMsWUFBTSxhQUZNO0FBR1pDLGVBQVMsT0FIRztBQUlaQyxjQUFRO0FBSkksS0FBZDtBQU1BLFdBQ0UsOEJBQUMsZ0JBQUQ7QUFDRSxZQUFLLFdBRFA7QUFFRSxZQUFNSixNQUFNLEtBQUtILEtBQUwsQ0FBV1EsSUFBakIsQ0FGUjtBQUdFLGFBQU8sRUFIVDtBQUlFLGNBQVE7QUFKVixNQURGO0FBUUQsRzs7b0JBTURDLE0scUJBQVM7QUFDUCxXQUNFO0FBQUMsMkJBQUQ7QUFBQSxRQUFPLFNBQVMsS0FBS1QsS0FBTCxDQUFXUSxJQUEzQixFQUFpQyxXQUFXLEtBQUtYLGtCQUFqRDtBQUNFO0FBQUE7QUFBQSxVQUFLLFdBQVUsZUFBZjtBQUNJLGFBQUtLLE9BQUwsRUFESjtBQUVFO0FBQUE7QUFBQTtBQUFRLGVBQUtGLEtBQUwsQ0FBV1U7QUFBbkI7QUFGRjtBQURGLEtBREY7QUFPRCxHOzs7RUF2QzBCQyxnQkFBTUMsYSIsImZpbGUiOiJhbGVydC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvcHJlZmVyLWRlZmF1bHQtZXhwb3J0ICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IEFsZXJ0IH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcbmltcG9ydCB7IEljb24gfSBmcm9tICdAb3B1c2NhcGl0YS9yZWFjdC1pY29ucyc7XG5pbXBvcnQgeyBPQ0FsZXJ0IGFzIE9DQWxlcnRBY3Rpb25zIH0gZnJvbSAnLi9hbGVydHMuYWN0aW9ucyc7XG5cbmV4cG9ydCBjbGFzcyBPQ0FsZXJ0IGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgaWQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICB0eXBlOiBQcm9wVHlwZXMub25lT2YoWydzdWNjZXNzJywgJ2luZm8nLCAnd2FybmluZycsICdkYW5nZXInXSkuaXNSZXF1aXJlZCxcbiAgICBtZXNzYWdlOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICBQcm9wVHlwZXMubm9kZSxcbiAgICBdKS5pc1JlcXVpcmVkLFxuICB9O1xuXG4gIGdldEljb24oKSB7XG4gICAgY29uc3QgbmFtZXMgPSB7XG4gICAgICBzdWNjZXNzOiAnb2snLFxuICAgICAgaW5mbzogJ2V4Y2xhbWF0aW9uJyxcbiAgICAgIHdhcm5pbmc6ICdhbGVydCcsXG4gICAgICBkYW5nZXI6ICdlcnJvcicsXG4gICAgfTtcbiAgICByZXR1cm4gKFxuICAgICAgPEljb25cbiAgICAgICAgdHlwZT1cImluZGljYXRvclwiXG4gICAgICAgIG5hbWU9e25hbWVzW3RoaXMucHJvcHMudHlwZV19XG4gICAgICAgIHdpZHRoPXszOH1cbiAgICAgICAgaGVpZ2h0PXszOH1cbiAgICAgIC8+XG4gICAgKTtcbiAgfVxuXG4gIGhhbmRsZUFsZXJ0RGlzbWlzcyA9ICgpID0+IHtcbiAgICBPQ0FsZXJ0QWN0aW9ucy5jbG9zZUFsZXJ0KHRoaXMucHJvcHMuaWQpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8QWxlcnQgYnNTdHlsZT17dGhpcy5wcm9wcy50eXBlfSBvbkRpc21pc3M9e3RoaXMuaGFuZGxlQWxlcnREaXNtaXNzfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbGVydC1jb250ZW50XCI+XG4gICAgICAgICAgeyB0aGlzLmdldEljb24oKSB9XG4gICAgICAgICAgPHNwYW4+eyB0aGlzLnByb3BzLm1lc3NhZ2UgfTwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0FsZXJ0Pik7XG4gIH1cbn1cbiJdfQ==