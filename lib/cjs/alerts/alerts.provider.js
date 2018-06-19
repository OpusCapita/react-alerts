'use strict';

exports.__esModule = true;
exports.OCAlertsProvider = undefined;

var _class, _temp; /* eslint-disable import/prefer-default-export */


var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _redux = require('redux');

var _reactRedux = require('react-redux');

var _reduxThunk = require('redux-thunk');

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _developmentOnly = require('redux-devtools-extension/developmentOnly');

var _alerts = require('./alerts.reducer');

var _alerts2 = require('./alerts.actions');

var _alerts3 = require('./alerts.component');

require('./alerts.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var composeEnhancers = (0, _developmentOnly.composeWithDevTools)({ name: 'OCAlerts' });
var store = (0, _redux.createStore)((0, _redux.combineReducers)({
  alerts: _alerts.alertsReducer
}), undefined, composeEnhancers((0, _redux.applyMiddleware)(_reduxThunk2.default)));

_alerts2.OCAlert.setStore(store);

var OCAlertsProvider = exports.OCAlertsProvider = (_temp = _class = function (_React$PureComponent) {
  _inherits(OCAlertsProvider, _React$PureComponent);

  function OCAlertsProvider() {
    _classCallCheck(this, OCAlertsProvider);

    return _possibleConstructorReturn(this, _React$PureComponent.apply(this, arguments));
  }

  OCAlertsProvider.prototype.render = function render() {
    return _react2.default.createElement(
      _reactRedux.Provider,
      { store: store },
      _react2.default.createElement(_alerts3.OCAlerts, { containerStyle: this.props.containerStyle })
    );
  };

  return OCAlertsProvider;
}(_react2.default.PureComponent), _class.defaultProps = {
  containerStyle: {}
}, _temp);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hbGVydHMvYWxlcnRzLnByb3ZpZGVyLmpzeCJdLCJuYW1lcyI6WyJjb21wb3NlRW5oYW5jZXJzIiwibmFtZSIsInN0b3JlIiwiYWxlcnRzIiwiYWxlcnRzUmVkdWNlciIsInVuZGVmaW5lZCIsInRodW5rIiwiT0NBbGVydCIsInNldFN0b3JlIiwiT0NBbGVydHNQcm92aWRlciIsInJlbmRlciIsInByb3BzIiwiY29udGFpbmVyU3R5bGUiLCJSZWFjdCIsIlB1cmVDb21wb25lbnQiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7O21CQUFBOzs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0FBS0E7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQUVBLElBQU1BLG1CQUFtQiwwQ0FBb0IsRUFBRUMsTUFBTSxVQUFSLEVBQXBCLENBQXpCO0FBQ0EsSUFBTUMsUUFBUSx3QkFDWiw0QkFBZ0I7QUFDZEMsVUFBUUM7QUFETSxDQUFoQixDQURZLEVBSVpDLFNBSlksRUFLWkwsaUJBQWlCLDRCQUFnQk0sb0JBQWhCLENBQWpCLENBTFksQ0FBZDs7QUFRQUMsaUJBQVFDLFFBQVIsQ0FBaUJOLEtBQWpCOztJQUVhTyxnQixXQUFBQSxnQjs7Ozs7Ozs7OzZCQVNYQyxNLHFCQUFTO0FBQ1AsV0FDRTtBQUFDLDBCQUFEO0FBQUEsUUFBVSxPQUFPUixLQUFqQjtBQUNFLG9DQUFDLGlCQUFELElBQVUsZ0JBQWdCLEtBQUtTLEtBQUwsQ0FBV0MsY0FBckM7QUFERixLQURGO0FBS0QsRzs7O0VBZm1DQyxnQkFBTUMsYSxVQUtuQ0MsWSxHQUFlO0FBQ3BCSCxrQkFBZ0I7QUFESSxDIiwiZmlsZSI6ImFsZXJ0cy5wcm92aWRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9wcmVmZXItZGVmYXVsdC1leHBvcnQgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHtcbiAgY3JlYXRlU3RvcmUsXG4gIGFwcGx5TWlkZGxld2FyZSxcbiAgY29tYmluZVJlZHVjZXJzLFxufSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB0aHVuayBmcm9tICdyZWR1eC10aHVuayc7XG5pbXBvcnQgeyBjb21wb3NlV2l0aERldlRvb2xzIH0gZnJvbSAncmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uL2RldmVsb3BtZW50T25seSc7XG5pbXBvcnQgeyBhbGVydHNSZWR1Y2VyIH0gZnJvbSAnLi9hbGVydHMucmVkdWNlcic7XG5pbXBvcnQgeyBPQ0FsZXJ0IH0gZnJvbSAnLi9hbGVydHMuYWN0aW9ucyc7XG5pbXBvcnQgeyBPQ0FsZXJ0cyB9IGZyb20gJy4vYWxlcnRzLmNvbXBvbmVudCc7XG5cbmltcG9ydCAnLi9hbGVydHMuc2Nzcyc7XG5cbmNvbnN0IGNvbXBvc2VFbmhhbmNlcnMgPSBjb21wb3NlV2l0aERldlRvb2xzKHsgbmFtZTogJ09DQWxlcnRzJyB9KTtcbmNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUoXG4gIGNvbWJpbmVSZWR1Y2Vycyh7XG4gICAgYWxlcnRzOiBhbGVydHNSZWR1Y2VyLFxuICB9KSxcbiAgdW5kZWZpbmVkLFxuICBjb21wb3NlRW5oYW5jZXJzKGFwcGx5TWlkZGxld2FyZSh0aHVuaykpLFxuKTtcblxuT0NBbGVydC5zZXRTdG9yZShzdG9yZSk7XG5cbmV4cG9ydCBjbGFzcyBPQ0FsZXJ0c1Byb3ZpZGVyIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgY29udGFpbmVyU3R5bGU6IFByb3BUeXBlcy5vYmplY3QsIC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgY29udGFpbmVyU3R5bGU6IHt9LFxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cbiAgICAgICAgPE9DQWxlcnRzIGNvbnRhaW5lclN0eWxlPXt0aGlzLnByb3BzLmNvbnRhaW5lclN0eWxlfSAvPlxuICAgICAgPC9Qcm92aWRlcj5cbiAgICApO1xuICB9XG59XG4iXX0=