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
      if (_this.props.onDismiss) {
        _this.props.onDismiss();
      }
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
          Array.isArray(this.props.message) ? this.props.message.map(function (m) {
            if (typeof m === 'string') {
              return m + '\n';
            }
            return _react2.default.createElement(
              _react2.default.Fragment,
              null,
              m,
              _react2.default.createElement('br', null)
            );
          }) : this.props.message
        )
      )
    );
  };

  return OCAlert;
}(_react2.default.PureComponent), _class.defaultProps = {
  onDismiss: null
}, _temp2);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hbGVydHMvYWxlcnQuY29tcG9uZW50LmpzeCJdLCJuYW1lcyI6WyJPQ0FsZXJ0IiwiaGFuZGxlQWxlcnREaXNtaXNzIiwiT0NBbGVydEFjdGlvbnMiLCJjbG9zZUFsZXJ0IiwicHJvcHMiLCJpZCIsIm9uRGlzbWlzcyIsImdldEljb24iLCJpY29ucyIsInN1Y2Nlc3MiLCJ0eXBlIiwibmFtZSIsIndpZHRoIiwiaGVpZ2h0Iiwic3R5bGUiLCJtYXJnaW5MZWZ0IiwiaW5mbyIsIndhcm5pbmciLCJkYW5nZXIiLCJyZW5kZXIiLCJBcnJheSIsImlzQXJyYXkiLCJtZXNzYWdlIiwibWFwIiwibSIsIlJlYWN0IiwiUHVyZUNvbXBvbmVudCIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7b0JBQUE7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7OztJQUVhQSxPLFdBQUFBLE87Ozs7Ozs7Ozs7OztnS0F3RFhDLGtCLEdBQXFCLFlBQU07QUFDekJDLHNCQUFlQyxVQUFmLENBQTBCLE1BQUtDLEtBQUwsQ0FBV0MsRUFBckM7QUFDQSxVQUFJLE1BQUtELEtBQUwsQ0FBV0UsU0FBZixFQUEwQjtBQUN4QixjQUFLRixLQUFMLENBQVdFLFNBQVg7QUFDRDtBQUNGLEs7OztvQkE5Q0RDLE8sc0JBQVU7QUFDUixRQUFNQyxRQUFRO0FBQ1pDLGVBQVM7QUFDUEMsY0FBTSxXQURDO0FBRVBDLGNBQU0sSUFGQztBQUdQQyxlQUFPLEVBSEE7QUFJUEMsZ0JBQVEsRUFKRDtBQUtQQyxlQUFPO0FBQ0xDLHNCQUFZO0FBRFA7QUFMQSxPQURHO0FBVVpDLFlBQU07QUFDSk4sY0FBTSxTQURGO0FBRUpDLGNBQU0sTUFGRjtBQUdKQyxlQUFPLEVBSEg7QUFJSkMsZ0JBQVE7QUFKSixPQVZNO0FBZ0JaSSxlQUFTO0FBQ1BQLGNBQU0sV0FEQztBQUVQQyxjQUFNLFNBRkM7QUFHUEMsZUFBTyxFQUhBO0FBSVBDLGdCQUFRLEVBSkQ7QUFLUEMsZUFBTztBQUNMQyxzQkFBWTtBQURQO0FBTEEsT0FoQkc7QUF5QlpHLGNBQVE7QUFDTlIsY0FBTSxXQURBO0FBRU5DLGNBQU0sT0FGQTtBQUdOQyxlQUFPLEVBSEQ7QUFJTkMsZ0JBQVEsRUFKRjtBQUtOQyxlQUFPO0FBQ0xDLHNCQUFZO0FBRFA7QUFMRDtBQXpCSSxLQUFkO0FBbUNBLFdBQ0UsOEJBQUMsZ0JBQUQsRUFBVVAsTUFBTSxLQUFLSixLQUFMLENBQVdNLElBQWpCLENBQVYsQ0FERjtBQUdELEc7O29CQVNEUyxNLHFCQUFTO0FBQ1AsV0FDRTtBQUFDLDJCQUFEO0FBQUEsUUFBTyxTQUFTLEtBQUtmLEtBQUwsQ0FBV00sSUFBM0IsRUFBaUMsV0FBVyxLQUFLVCxrQkFBakQ7QUFDRTtBQUFBO0FBQUEsVUFBSyxXQUFVLGVBQWY7QUFDRTtBQUFBO0FBQUEsWUFBSyxXQUFVLHNCQUFmO0FBQXVDLGVBQUtNLE9BQUw7QUFBdkMsU0FERjtBQUVFO0FBQUE7QUFBQSxZQUFNLFdBQVUseUJBQWhCO0FBQ0lhLGdCQUFNQyxPQUFOLENBQWMsS0FBS2pCLEtBQUwsQ0FBV2tCLE9BQXpCLElBQ0UsS0FBS2xCLEtBQUwsQ0FBV2tCLE9BQVgsQ0FBbUJDLEdBQW5CLENBQXVCLFVBQUNDLENBQUQsRUFBTztBQUM1QixnQkFBSSxPQUFPQSxDQUFQLEtBQWEsUUFBakIsRUFBMkI7QUFDekIscUJBQVVBLENBQVY7QUFDRDtBQUNELG1CQUNFO0FBQUMsNkJBQUQsQ0FBTyxRQUFQO0FBQUE7QUFDR0EsZUFESDtBQUVFO0FBRkYsYUFERjtBQU1ELFdBVkQsQ0FERixHQVlFLEtBQUtwQixLQUFMLENBQVdrQjtBQWJqQjtBQUZGO0FBREYsS0FERjtBQXNCRCxHOzs7RUF0RjBCRyxnQkFBTUMsYSxVQVcxQkMsWSxHQUFlO0FBQ3BCckIsYUFBVztBQURTLEMiLCJmaWxlIjoiYWxlcnQuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L3ByZWZlci1kZWZhdWx0LWV4cG9ydCAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBBbGVydCB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XG5pbXBvcnQgeyBJY29uIH0gZnJvbSAnQG9wdXNjYXBpdGEvcmVhY3QtaWNvbnMnO1xuaW1wb3J0IHsgT0NBbGVydCBhcyBPQ0FsZXJ0QWN0aW9ucyB9IGZyb20gJy4vYWxlcnRzLmFjdGlvbnMnO1xuXG5leHBvcnQgY2xhc3MgT0NBbGVydCBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGlkOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgdHlwZTogUHJvcFR5cGVzLm9uZU9mKFsnc3VjY2VzcycsICdpbmZvJywgJ3dhcm5pbmcnLCAnZGFuZ2VyJ10pLmlzUmVxdWlyZWQsXG4gICAgbWVzc2FnZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgUHJvcFR5cGVzLm5vZGUsXG4gICAgXSkuaXNSZXF1aXJlZCxcbiAgICBvbkRpc21pc3M6IFByb3BUeXBlcy5mdW5jLFxuICB9O1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgb25EaXNtaXNzOiBudWxsLFxuICB9XG5cbiAgZ2V0SWNvbigpIHtcbiAgICBjb25zdCBpY29ucyA9IHtcbiAgICAgIHN1Y2Nlc3M6IHtcbiAgICAgICAgdHlwZTogJ2luZGljYXRvcicsXG4gICAgICAgIG5hbWU6ICdvaycsXG4gICAgICAgIHdpZHRoOiAxNixcbiAgICAgICAgaGVpZ2h0OiAxNixcbiAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICBtYXJnaW5MZWZ0OiAnMTBweCcsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgaW5mbzoge1xuICAgICAgICB0eXBlOiAncHJvZHVjdCcsXG4gICAgICAgIG5hbWU6ICdJbmZvJyxcbiAgICAgICAgd2lkdGg6IDMwLFxuICAgICAgICBoZWlnaHQ6IDMwLFxuICAgICAgfSxcbiAgICAgIHdhcm5pbmc6IHtcbiAgICAgICAgdHlwZTogJ2luZGljYXRvcicsXG4gICAgICAgIG5hbWU6ICd3YXJuaW5nJyxcbiAgICAgICAgd2lkdGg6IDI1LFxuICAgICAgICBoZWlnaHQ6IDI1LFxuICAgICAgICBzdHlsZToge1xuICAgICAgICAgIG1hcmdpbkxlZnQ6ICc1cHgnLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIGRhbmdlcjoge1xuICAgICAgICB0eXBlOiAnaW5kaWNhdG9yJyxcbiAgICAgICAgbmFtZTogJ2Vycm9yJyxcbiAgICAgICAgd2lkdGg6IDI1LFxuICAgICAgICBoZWlnaHQ6IDI1LFxuICAgICAgICBzdHlsZToge1xuICAgICAgICAgIG1hcmdpbkxlZnQ6ICc1cHgnLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9O1xuICAgIHJldHVybiAoXG4gICAgICA8SWNvbiB7Li4uaWNvbnNbdGhpcy5wcm9wcy50eXBlXX0gLz5cbiAgICApO1xuICB9XG5cbiAgaGFuZGxlQWxlcnREaXNtaXNzID0gKCkgPT4ge1xuICAgIE9DQWxlcnRBY3Rpb25zLmNsb3NlQWxlcnQodGhpcy5wcm9wcy5pZCk7XG4gICAgaWYgKHRoaXMucHJvcHMub25EaXNtaXNzKSB7XG4gICAgICB0aGlzLnByb3BzLm9uRGlzbWlzcygpO1xuICAgIH1cbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxBbGVydCBic1N0eWxlPXt0aGlzLnByb3BzLnR5cGV9IG9uRGlzbWlzcz17dGhpcy5oYW5kbGVBbGVydERpc21pc3N9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFsZXJ0LWNvbnRlbnRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFsZXJ0LWljb24tY29udGFpbmVyXCI+e3RoaXMuZ2V0SWNvbigpfTwvZGl2PlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImFsZXJ0LW1lc3NhZ2UtY29udGFpbmVyXCI+XG4gICAgICAgICAgICB7IEFycmF5LmlzQXJyYXkodGhpcy5wcm9wcy5tZXNzYWdlKVxuICAgICAgICAgICAgICA/IHRoaXMucHJvcHMubWVzc2FnZS5tYXAoKG0pID0+IHtcbiAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgbSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGAke219XFxuYDtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgICB7bX1cbiAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgOiB0aGlzLnByb3BzLm1lc3NhZ2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9BbGVydD4pO1xuICB9XG59XG4iXX0=