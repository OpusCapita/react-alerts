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

var OCAlertsProvider = exports.OCAlertsProvider = (_temp = _class = function (_React$PureComponent) {
  _inherits(OCAlertsProvider, _React$PureComponent);

  function OCAlertsProvider(props) {
    _classCallCheck(this, OCAlertsProvider);

    var _this = _possibleConstructorReturn(this, _React$PureComponent.call(this, props));

    var composeEnhancers = (0, _developmentOnly.composeWithDevTools)({ name: 'OCAlerts' });
    if (!_this.store) {
      _this.store = (0, _redux.createStore)((0, _redux.combineReducers)({
        alerts: _alerts.alertsReducer
      }), undefined, composeEnhancers((0, _redux.applyMiddleware)(_reduxThunk2.default)));
    }
    _alerts2.OCAlert.setStore(_this.store);
    return _this;
  }

  OCAlertsProvider.prototype.render = function render() {
    return _react2.default.createElement(
      _reactRedux.Provider,
      { store: this.store },
      _react2.default.createElement(_alerts3.OCAlerts, { containerStyle: this.props.containerStyle })
    );
  };

  return OCAlertsProvider;
}(_react2.default.PureComponent), _class.defaultProps = {
  containerStyle: {}
}, _temp);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hbGVydHMvYWxlcnRzLnByb3ZpZGVyLmpzeCJdLCJuYW1lcyI6WyJPQ0FsZXJ0c1Byb3ZpZGVyIiwicHJvcHMiLCJjb21wb3NlRW5oYW5jZXJzIiwibmFtZSIsInN0b3JlIiwiYWxlcnRzIiwiYWxlcnRzUmVkdWNlciIsInVuZGVmaW5lZCIsInRodW5rIiwiT0NBbGVydCIsInNldFN0b3JlIiwicmVuZGVyIiwiY29udGFpbmVyU3R5bGUiLCJSZWFjdCIsIlB1cmVDb21wb25lbnQiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7O21CQUFBOzs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0FBS0E7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7Ozs7Ozs7OztJQUVhQSxnQixXQUFBQSxnQjs7O0FBU1gsNEJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxpREFDakIsZ0NBQU1BLEtBQU4sQ0FEaUI7O0FBRWpCLFFBQU1DLG1CQUFtQiwwQ0FBb0IsRUFBRUMsTUFBTSxVQUFSLEVBQXBCLENBQXpCO0FBQ0EsUUFBSSxDQUFDLE1BQUtDLEtBQVYsRUFBaUI7QUFDZixZQUFLQSxLQUFMLEdBQWEsd0JBQ1gsNEJBQWdCO0FBQ2RDLGdCQUFRQztBQURNLE9BQWhCLENBRFcsRUFJWEMsU0FKVyxFQUtYTCxpQkFBaUIsNEJBQWdCTSxvQkFBaEIsQ0FBakIsQ0FMVyxDQUFiO0FBT0Q7QUFDREMscUJBQVFDLFFBQVIsQ0FBaUIsTUFBS04sS0FBdEI7QUFaaUI7QUFhbEI7OzZCQUVETyxNLHFCQUFTO0FBQ1AsV0FDRTtBQUFDLDBCQUFEO0FBQUEsUUFBVSxPQUFPLEtBQUtQLEtBQXRCO0FBQ0Usb0NBQUMsaUJBQUQsSUFBVSxnQkFBZ0IsS0FBS0gsS0FBTCxDQUFXVyxjQUFyQztBQURGLEtBREY7QUFLRCxHOzs7RUE5Qm1DQyxnQkFBTUMsYSxVQUtuQ0MsWSxHQUFlO0FBQ3BCSCxrQkFBZ0I7QUFESSxDIiwiZmlsZSI6ImFsZXJ0cy5wcm92aWRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9wcmVmZXItZGVmYXVsdC1leHBvcnQgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHtcbiAgY3JlYXRlU3RvcmUsXG4gIGFwcGx5TWlkZGxld2FyZSxcbiAgY29tYmluZVJlZHVjZXJzLFxufSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB0aHVuayBmcm9tICdyZWR1eC10aHVuayc7XG5pbXBvcnQgeyBjb21wb3NlV2l0aERldlRvb2xzIH0gZnJvbSAncmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uL2RldmVsb3BtZW50T25seSc7XG5pbXBvcnQgeyBhbGVydHNSZWR1Y2VyIH0gZnJvbSAnLi9hbGVydHMucmVkdWNlcic7XG5pbXBvcnQgeyBPQ0FsZXJ0IH0gZnJvbSAnLi9hbGVydHMuYWN0aW9ucyc7XG5pbXBvcnQgeyBPQ0FsZXJ0cyB9IGZyb20gJy4vYWxlcnRzLmNvbXBvbmVudCc7XG5cbmltcG9ydCAnLi9hbGVydHMuc2Nzcyc7XG5cbmV4cG9ydCBjbGFzcyBPQ0FsZXJ0c1Byb3ZpZGVyIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgY29udGFpbmVyU3R5bGU6IFByb3BUeXBlcy5vYmplY3QsIC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgY29udGFpbmVyU3R5bGU6IHt9LFxuICB9XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgY29uc3QgY29tcG9zZUVuaGFuY2VycyA9IGNvbXBvc2VXaXRoRGV2VG9vbHMoeyBuYW1lOiAnT0NBbGVydHMnIH0pO1xuICAgIGlmICghdGhpcy5zdG9yZSkge1xuICAgICAgdGhpcy5zdG9yZSA9IGNyZWF0ZVN0b3JlKFxuICAgICAgICBjb21iaW5lUmVkdWNlcnMoe1xuICAgICAgICAgIGFsZXJ0czogYWxlcnRzUmVkdWNlcixcbiAgICAgICAgfSksXG4gICAgICAgIHVuZGVmaW5lZCxcbiAgICAgICAgY29tcG9zZUVuaGFuY2VycyhhcHBseU1pZGRsZXdhcmUodGh1bmspKSxcbiAgICAgICk7XG4gICAgfVxuICAgIE9DQWxlcnQuc2V0U3RvcmUodGhpcy5zdG9yZSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxQcm92aWRlciBzdG9yZT17dGhpcy5zdG9yZX0+XG4gICAgICAgIDxPQ0FsZXJ0cyBjb250YWluZXJTdHlsZT17dGhpcy5wcm9wcy5jb250YWluZXJTdHlsZX0gLz5cbiAgICAgIDwvUHJvdmlkZXI+XG4gICAgKTtcbiAgfVxufVxuIl19