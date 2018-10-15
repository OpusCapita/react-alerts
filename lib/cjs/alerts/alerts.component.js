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
}(_react2.default.PureComponent), _class2.defaultProps = {
  containerStyle: {}
}, _temp)) || _class);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hbGVydHMvYWxlcnRzLmNvbXBvbmVudC5qc3giXSwibmFtZXMiOlsibWFwU3RhdGVUb1Byb3BzIiwiYWxlcnRzIiwic3RhdGUiLCJPQ0FsZXJ0cyIsInJlbmRlciIsInByb3BzIiwiY29udGFpbmVyU3R5bGUiLCJtYXAiLCJhbGVydCIsImdldCIsIlJlYWN0IiwiUHVyZUNvbXBvbmVudCIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7a0NBQUE7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsa0JBQWtCLFNBQWxCQSxlQUFrQjtBQUFBLFNBQVU7QUFDaENDLFlBQVFDLE1BQU1EO0FBRGtCLEdBQVY7QUFBQSxDQUF4Qjs7SUFLYUUsUSxXQUFBQSxRLFdBRFoseUJBQVFILGVBQVIsQzs7Ozs7Ozs7O3FCQWtCQ0ksTSxxQkFBUztBQUNQLFdBQ0U7QUFBQTtBQUFBLFFBQUssSUFBRyxxQkFBUixFQUE4QixPQUFPLEtBQUtDLEtBQUwsQ0FBV0MsY0FBaEQ7QUFDSSxXQUFLRCxLQUFMLENBQVdKLE1BQVgsQ0FBa0JNLEdBQWxCLENBQXNCO0FBQUEsZUFDdEIsOEJBQUMsY0FBRDtBQUNFLGVBQUtDLE1BQU1DLEdBQU4sQ0FBVSxJQUFWLENBRFA7QUFFRSxjQUFJRCxNQUFNQyxHQUFOLENBQVUsSUFBVixDQUZOO0FBR0UsZ0JBQU1ELE1BQU1DLEdBQU4sQ0FBVSxNQUFWLENBSFI7QUFJRSxtQkFBU0QsTUFBTUMsR0FBTixDQUFVLFNBQVY7QUFKWCxVQURzQjtBQUFBLE9BQXRCO0FBREosS0FERjtBQVlELEc7OztFQTlCMkJDLGdCQUFNQyxhLFdBYTNCQyxZLEdBQWU7QUFDcEJOLGtCQUFnQjtBQURJLEMiLCJmaWxlIjoiYWxlcnRzLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9wcmVmZXItZGVmYXVsdC1leHBvcnQgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IEltbXV0YWJsZVByb3BUeXBlcyBmcm9tICdyZWFjdC1pbW11dGFibGUtcHJvcHR5cGVzJztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBPQ0FsZXJ0IH0gZnJvbSAnLi9hbGVydC5jb21wb25lbnQnO1xuaW1wb3J0ICcuL2FsZXJ0cy5zY3NzJztcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4gKHtcbiAgYWxlcnRzOiBzdGF0ZS5hbGVydHMsXG59KTtcblxuQGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKVxuZXhwb3J0IGNsYXNzIE9DQWxlcnRzIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgYWxlcnRzOiBJbW11dGFibGVQcm9wVHlwZXMubGlzdE9mKEltbXV0YWJsZVByb3BUeXBlcy5tYXBDb250YWlucyh7XG4gICAgICBpZDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgICAgdHlwZTogUHJvcFR5cGVzLm9uZU9mKFsnc3VjY2VzcycsICdpbmZvJywgJ3dhcm5pbmcnLCAnZGFuZ2VyJ10pLmlzUmVxdWlyZWQsXG4gICAgICBtZXNzYWdlOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgUHJvcFR5cGVzLm5vZGUsXG4gICAgICBdKS5pc1JlcXVpcmVkLFxuICAgIH0pKS5pc1JlcXVpcmVkLFxuICAgIGNvbnRhaW5lclN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LCAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGNvbnRhaW5lclN0eWxlOiB7fSxcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBpZD1cImdsb2JhbC1ub3RpZmljYXRpb25cIiBzdHlsZT17dGhpcy5wcm9wcy5jb250YWluZXJTdHlsZX0+XG4gICAgICAgIHsgdGhpcy5wcm9wcy5hbGVydHMubWFwKGFsZXJ0ID0+IChcbiAgICAgICAgICA8T0NBbGVydFxuICAgICAgICAgICAga2V5PXthbGVydC5nZXQoJ2lkJyl9XG4gICAgICAgICAgICBpZD17YWxlcnQuZ2V0KCdpZCcpfVxuICAgICAgICAgICAgdHlwZT17YWxlcnQuZ2V0KCd0eXBlJyl9XG4gICAgICAgICAgICBtZXNzYWdlPXthbGVydC5nZXQoJ21lc3NhZ2UnKX1cbiAgICAgICAgICAvPlxuICAgICAgICApKSB9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG4iXX0=