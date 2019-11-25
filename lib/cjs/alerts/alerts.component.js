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
          message: alert.get('message'),
          onDismiss: alert.get('onDismiss')
        });
      })
    );
  };

  return OCAlerts;
}(_react2.default.PureComponent), _class2.defaultProps = {
  containerStyle: {}
}, _temp)) || _class);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hbGVydHMvYWxlcnRzLmNvbXBvbmVudC5qc3giXSwibmFtZXMiOlsibWFwU3RhdGVUb1Byb3BzIiwiYWxlcnRzIiwic3RhdGUiLCJPQ0FsZXJ0cyIsInJlbmRlciIsInByb3BzIiwiY29udGFpbmVyU3R5bGUiLCJtYXAiLCJhbGVydCIsImdldCIsIlJlYWN0IiwiUHVyZUNvbXBvbmVudCIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7a0NBQUE7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsa0JBQWtCLFNBQWxCQSxlQUFrQjtBQUFBLFNBQVU7QUFDaENDLFlBQVFDLE1BQU1EO0FBRGtCLEdBQVY7QUFBQSxDQUF4Qjs7SUFLYUUsUSxXQUFBQSxRLFdBRFoseUJBQVFILGVBQVIsQzs7Ozs7Ozs7O3FCQW1CQ0ksTSxxQkFBUztBQUNQLFdBQ0U7QUFBQTtBQUFBLFFBQUssSUFBRyxxQkFBUixFQUE4QixPQUFPLEtBQUtDLEtBQUwsQ0FBV0MsY0FBaEQ7QUFDSSxXQUFLRCxLQUFMLENBQVdKLE1BQVgsQ0FBa0JNLEdBQWxCLENBQXNCO0FBQUEsZUFDdEIsOEJBQUMsY0FBRDtBQUNFLGVBQUtDLE1BQU1DLEdBQU4sQ0FBVSxJQUFWLENBRFA7QUFFRSxjQUFJRCxNQUFNQyxHQUFOLENBQVUsSUFBVixDQUZOO0FBR0UsZ0JBQU1ELE1BQU1DLEdBQU4sQ0FBVSxNQUFWLENBSFI7QUFJRSxtQkFBU0QsTUFBTUMsR0FBTixDQUFVLFNBQVYsQ0FKWDtBQUtFLHFCQUFXRCxNQUFNQyxHQUFOLENBQVUsV0FBVjtBQUxiLFVBRHNCO0FBQUEsT0FBdEI7QUFESixLQURGO0FBYUQsRzs7O0VBaEMyQkMsZ0JBQU1DLGEsV0FjM0JDLFksR0FBZTtBQUNwQk4sa0JBQWdCO0FBREksQyIsImZpbGUiOiJhbGVydHMuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L3ByZWZlci1kZWZhdWx0LWV4cG9ydCAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgSW1tdXRhYmxlUHJvcFR5cGVzIGZyb20gJ3JlYWN0LWltbXV0YWJsZS1wcm9wdHlwZXMnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IE9DQWxlcnQgfSBmcm9tICcuL2FsZXJ0LmNvbXBvbmVudCc7XG5pbXBvcnQgJy4vYWxlcnRzLnNjc3MnO1xuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiAoe1xuICBhbGVydHM6IHN0YXRlLmFsZXJ0cyxcbn0pO1xuXG5AY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpXG5leHBvcnQgY2xhc3MgT0NBbGVydHMgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBhbGVydHM6IEltbXV0YWJsZVByb3BUeXBlcy5saXN0T2YoSW1tdXRhYmxlUHJvcFR5cGVzLm1hcENvbnRhaW5zKHtcbiAgICAgIGlkOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgICB0eXBlOiBQcm9wVHlwZXMub25lT2YoWydzdWNjZXNzJywgJ2luZm8nLCAnd2FybmluZycsICdkYW5nZXInXSkuaXNSZXF1aXJlZCxcbiAgICAgIG1lc3NhZ2U6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgICBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICBQcm9wVHlwZXMubm9kZSxcbiAgICAgIF0pLmlzUmVxdWlyZWQsXG4gICAgICBvbkRpc21pc3M6IFByb3BUeXBlcy5mdW5jLFxuICAgIH0pKS5pc1JlcXVpcmVkLFxuICAgIGNvbnRhaW5lclN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LCAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGNvbnRhaW5lclN0eWxlOiB7fSxcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBpZD1cImdsb2JhbC1ub3RpZmljYXRpb25cIiBzdHlsZT17dGhpcy5wcm9wcy5jb250YWluZXJTdHlsZX0+XG4gICAgICAgIHsgdGhpcy5wcm9wcy5hbGVydHMubWFwKGFsZXJ0ID0+IChcbiAgICAgICAgICA8T0NBbGVydFxuICAgICAgICAgICAga2V5PXthbGVydC5nZXQoJ2lkJyl9XG4gICAgICAgICAgICBpZD17YWxlcnQuZ2V0KCdpZCcpfVxuICAgICAgICAgICAgdHlwZT17YWxlcnQuZ2V0KCd0eXBlJyl9XG4gICAgICAgICAgICBtZXNzYWdlPXthbGVydC5nZXQoJ21lc3NhZ2UnKX1cbiAgICAgICAgICAgIG9uRGlzbWlzcz17YWxlcnQuZ2V0KCdvbkRpc21pc3MnKX1cbiAgICAgICAgICAvPlxuICAgICAgICApKSB9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG4iXX0=