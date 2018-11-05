var _class, _temp;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* eslint-disable import/prefer-default-export */
import React from 'react';
import PropTypes from 'prop-types';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { alertsReducer } from './alerts.reducer';
import { OCAlert } from './alerts.actions';
import { OCAlerts } from './alerts.component';

import './alerts.scss';

export var OCAlertsProvider = (_temp = _class = function (_React$PureComponent) {
  _inherits(OCAlertsProvider, _React$PureComponent);

  function OCAlertsProvider(props) {
    _classCallCheck(this, OCAlertsProvider);

    var _this = _possibleConstructorReturn(this, _React$PureComponent.call(this, props));

    var composeEnhancers = composeWithDevTools({ name: 'OCAlerts' });
    if (!_this.store) {
      _this.store = createStore(combineReducers({
        alerts: alertsReducer
      }), undefined, composeEnhancers(applyMiddleware(thunk)));
    }
    OCAlert.setStore(_this.store);
    return _this;
  }

  OCAlertsProvider.prototype.render = function render() {
    return React.createElement(
      Provider,
      { store: this.store },
      React.createElement(OCAlerts, { containerStyle: this.props.containerStyle })
    );
  };

  return OCAlertsProvider;
}(React.PureComponent), _class.defaultProps = {
  containerStyle: {}
}, _temp);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hbGVydHMvYWxlcnRzLnByb3ZpZGVyLmpzeCJdLCJuYW1lcyI6WyJSZWFjdCIsIlByb3BUeXBlcyIsImNyZWF0ZVN0b3JlIiwiYXBwbHlNaWRkbGV3YXJlIiwiY29tYmluZVJlZHVjZXJzIiwiUHJvdmlkZXIiLCJ0aHVuayIsImNvbXBvc2VXaXRoRGV2VG9vbHMiLCJhbGVydHNSZWR1Y2VyIiwiT0NBbGVydCIsIk9DQWxlcnRzIiwiT0NBbGVydHNQcm92aWRlciIsInByb3BzIiwiY29tcG9zZUVuaGFuY2VycyIsIm5hbWUiLCJzdG9yZSIsImFsZXJ0cyIsInVuZGVmaW5lZCIsInNldFN0b3JlIiwicmVuZGVyIiwiY29udGFpbmVyU3R5bGUiLCJQdXJlQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0EsT0FBT0EsS0FBUCxNQUFrQixPQUFsQjtBQUNBLE9BQU9DLFNBQVAsTUFBc0IsWUFBdEI7QUFDQSxTQUNFQyxXQURGLEVBRUVDLGVBRkYsRUFHRUMsZUFIRixRQUlPLE9BSlA7QUFLQSxTQUFTQyxRQUFULFFBQXlCLGFBQXpCO0FBQ0EsT0FBT0MsS0FBUCxNQUFrQixhQUFsQjtBQUNBLFNBQVNDLG1CQUFULFFBQW9DLDBDQUFwQztBQUNBLFNBQVNDLGFBQVQsUUFBOEIsa0JBQTlCO0FBQ0EsU0FBU0MsT0FBVCxRQUF3QixrQkFBeEI7QUFDQSxTQUFTQyxRQUFULFFBQXlCLG9CQUF6Qjs7QUFFQSxPQUFPLGVBQVA7O0FBRUEsV0FBYUMsZ0JBQWI7QUFBQTs7QUFTRSw0QkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLGlEQUNqQixnQ0FBTUEsS0FBTixDQURpQjs7QUFFakIsUUFBTUMsbUJBQW1CTixvQkFBb0IsRUFBRU8sTUFBTSxVQUFSLEVBQXBCLENBQXpCO0FBQ0EsUUFBSSxDQUFDLE1BQUtDLEtBQVYsRUFBaUI7QUFDZixZQUFLQSxLQUFMLEdBQWFiLFlBQ1hFLGdCQUFnQjtBQUNkWSxnQkFBUVI7QUFETSxPQUFoQixDQURXLEVBSVhTLFNBSlcsRUFLWEosaUJBQWlCVixnQkFBZ0JHLEtBQWhCLENBQWpCLENBTFcsQ0FBYjtBQU9EO0FBQ0RHLFlBQVFTLFFBQVIsQ0FBaUIsTUFBS0gsS0FBdEI7QUFaaUI7QUFhbEI7O0FBdEJILDZCQXdCRUksTUF4QkYscUJBd0JXO0FBQ1AsV0FDRTtBQUFDLGNBQUQ7QUFBQSxRQUFVLE9BQU8sS0FBS0osS0FBdEI7QUFDRSwwQkFBQyxRQUFELElBQVUsZ0JBQWdCLEtBQUtILEtBQUwsQ0FBV1EsY0FBckM7QUFERixLQURGO0FBS0QsR0E5Qkg7O0FBQUE7QUFBQSxFQUFzQ3BCLE1BQU1xQixhQUE1QyxVQUtTQyxZQUxULEdBS3dCO0FBQ3BCRixrQkFBZ0I7QUFESSxDQUx4QiIsImZpbGUiOiJhbGVydHMucHJvdmlkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvcHJlZmVyLWRlZmF1bHQtZXhwb3J0ICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7XG4gIGNyZWF0ZVN0b3JlLFxuICBhcHBseU1pZGRsZXdhcmUsXG4gIGNvbWJpbmVSZWR1Y2Vycyxcbn0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgdGh1bmsgZnJvbSAncmVkdXgtdGh1bmsnO1xuaW1wb3J0IHsgY29tcG9zZVdpdGhEZXZUb29scyB9IGZyb20gJ3JlZHV4LWRldnRvb2xzLWV4dGVuc2lvbi9kZXZlbG9wbWVudE9ubHknO1xuaW1wb3J0IHsgYWxlcnRzUmVkdWNlciB9IGZyb20gJy4vYWxlcnRzLnJlZHVjZXInO1xuaW1wb3J0IHsgT0NBbGVydCB9IGZyb20gJy4vYWxlcnRzLmFjdGlvbnMnO1xuaW1wb3J0IHsgT0NBbGVydHMgfSBmcm9tICcuL2FsZXJ0cy5jb21wb25lbnQnO1xuXG5pbXBvcnQgJy4vYWxlcnRzLnNjc3MnO1xuXG5leHBvcnQgY2xhc3MgT0NBbGVydHNQcm92aWRlciBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGNvbnRhaW5lclN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LCAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGNvbnRhaW5lclN0eWxlOiB7fSxcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIGNvbnN0IGNvbXBvc2VFbmhhbmNlcnMgPSBjb21wb3NlV2l0aERldlRvb2xzKHsgbmFtZTogJ09DQWxlcnRzJyB9KTtcbiAgICBpZiAoIXRoaXMuc3RvcmUpIHtcbiAgICAgIHRoaXMuc3RvcmUgPSBjcmVhdGVTdG9yZShcbiAgICAgICAgY29tYmluZVJlZHVjZXJzKHtcbiAgICAgICAgICBhbGVydHM6IGFsZXJ0c1JlZHVjZXIsXG4gICAgICAgIH0pLFxuICAgICAgICB1bmRlZmluZWQsXG4gICAgICAgIGNvbXBvc2VFbmhhbmNlcnMoYXBwbHlNaWRkbGV3YXJlKHRodW5rKSksXG4gICAgICApO1xuICAgIH1cbiAgICBPQ0FsZXJ0LnNldFN0b3JlKHRoaXMuc3RvcmUpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8UHJvdmlkZXIgc3RvcmU9e3RoaXMuc3RvcmV9PlxuICAgICAgICA8T0NBbGVydHMgY29udGFpbmVyU3R5bGU9e3RoaXMucHJvcHMuY29udGFpbmVyU3R5bGV9IC8+XG4gICAgICA8L1Byb3ZpZGVyPlxuICAgICk7XG4gIH1cbn1cbiJdfQ==