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

var composeEnhancers = composeWithDevTools({ name: 'OCAlerts' });
var store = createStore(combineReducers({
  alerts: alertsReducer
}), undefined, composeEnhancers(applyMiddleware(thunk)));

OCAlert.setStore(store);

export var OCAlertsProvider = (_temp = _class = function (_React$PureComponent) {
  _inherits(OCAlertsProvider, _React$PureComponent);

  function OCAlertsProvider() {
    _classCallCheck(this, OCAlertsProvider);

    return _possibleConstructorReturn(this, _React$PureComponent.apply(this, arguments));
  }

  OCAlertsProvider.prototype.render = function render() {
    return React.createElement(
      Provider,
      { store: store },
      React.createElement(OCAlerts, { containerStyle: this.props.containerStyle })
    );
  };

  return OCAlertsProvider;
}(React.PureComponent), _class.defaultProps = {
  containerStyle: {}
}, _temp);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hbGVydHMvYWxlcnRzLnByb3ZpZGVyLmpzeCJdLCJuYW1lcyI6WyJSZWFjdCIsIlByb3BUeXBlcyIsImNyZWF0ZVN0b3JlIiwiYXBwbHlNaWRkbGV3YXJlIiwiY29tYmluZVJlZHVjZXJzIiwiUHJvdmlkZXIiLCJ0aHVuayIsImNvbXBvc2VXaXRoRGV2VG9vbHMiLCJhbGVydHNSZWR1Y2VyIiwiT0NBbGVydCIsIk9DQWxlcnRzIiwiY29tcG9zZUVuaGFuY2VycyIsIm5hbWUiLCJzdG9yZSIsImFsZXJ0cyIsInVuZGVmaW5lZCIsInNldFN0b3JlIiwiT0NBbGVydHNQcm92aWRlciIsInJlbmRlciIsInByb3BzIiwiY29udGFpbmVyU3R5bGUiLCJQdXJlQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0EsT0FBT0EsS0FBUCxNQUFrQixPQUFsQjtBQUNBLE9BQU9DLFNBQVAsTUFBc0IsWUFBdEI7QUFDQSxTQUNFQyxXQURGLEVBRUVDLGVBRkYsRUFHRUMsZUFIRixRQUlPLE9BSlA7QUFLQSxTQUFTQyxRQUFULFFBQXlCLGFBQXpCO0FBQ0EsT0FBT0MsS0FBUCxNQUFrQixhQUFsQjtBQUNBLFNBQVNDLG1CQUFULFFBQW9DLDBDQUFwQztBQUNBLFNBQVNDLGFBQVQsUUFBOEIsa0JBQTlCO0FBQ0EsU0FBU0MsT0FBVCxRQUF3QixrQkFBeEI7QUFDQSxTQUFTQyxRQUFULFFBQXlCLG9CQUF6Qjs7QUFFQSxPQUFPLGVBQVA7O0FBRUEsSUFBTUMsbUJBQW1CSixvQkFBb0IsRUFBRUssTUFBTSxVQUFSLEVBQXBCLENBQXpCO0FBQ0EsSUFBTUMsUUFBUVgsWUFDWkUsZ0JBQWdCO0FBQ2RVLFVBQVFOO0FBRE0sQ0FBaEIsQ0FEWSxFQUlaTyxTQUpZLEVBS1pKLGlCQUFpQlIsZ0JBQWdCRyxLQUFoQixDQUFqQixDQUxZLENBQWQ7O0FBUUFHLFFBQVFPLFFBQVIsQ0FBaUJILEtBQWpCOztBQUVBLFdBQWFJLGdCQUFiO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUFBLDZCQVNFQyxNQVRGLHFCQVNXO0FBQ1AsV0FDRTtBQUFDLGNBQUQ7QUFBQSxRQUFVLE9BQU9MLEtBQWpCO0FBQ0UsMEJBQUMsUUFBRCxJQUFVLGdCQUFnQixLQUFLTSxLQUFMLENBQVdDLGNBQXJDO0FBREYsS0FERjtBQUtELEdBZkg7O0FBQUE7QUFBQSxFQUFzQ3BCLE1BQU1xQixhQUE1QyxVQUtTQyxZQUxULEdBS3dCO0FBQ3BCRixrQkFBZ0I7QUFESSxDQUx4QiIsImZpbGUiOiJhbGVydHMucHJvdmlkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvcHJlZmVyLWRlZmF1bHQtZXhwb3J0ICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7XG4gIGNyZWF0ZVN0b3JlLFxuICBhcHBseU1pZGRsZXdhcmUsXG4gIGNvbWJpbmVSZWR1Y2Vycyxcbn0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgdGh1bmsgZnJvbSAncmVkdXgtdGh1bmsnO1xuaW1wb3J0IHsgY29tcG9zZVdpdGhEZXZUb29scyB9IGZyb20gJ3JlZHV4LWRldnRvb2xzLWV4dGVuc2lvbi9kZXZlbG9wbWVudE9ubHknO1xuaW1wb3J0IHsgYWxlcnRzUmVkdWNlciB9IGZyb20gJy4vYWxlcnRzLnJlZHVjZXInO1xuaW1wb3J0IHsgT0NBbGVydCB9IGZyb20gJy4vYWxlcnRzLmFjdGlvbnMnO1xuaW1wb3J0IHsgT0NBbGVydHMgfSBmcm9tICcuL2FsZXJ0cy5jb21wb25lbnQnO1xuXG5pbXBvcnQgJy4vYWxlcnRzLnNjc3MnO1xuXG5jb25zdCBjb21wb3NlRW5oYW5jZXJzID0gY29tcG9zZVdpdGhEZXZUb29scyh7IG5hbWU6ICdPQ0FsZXJ0cycgfSk7XG5jb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKFxuICBjb21iaW5lUmVkdWNlcnMoe1xuICAgIGFsZXJ0czogYWxlcnRzUmVkdWNlcixcbiAgfSksXG4gIHVuZGVmaW5lZCxcbiAgY29tcG9zZUVuaGFuY2VycyhhcHBseU1pZGRsZXdhcmUodGh1bmspKSxcbik7XG5cbk9DQWxlcnQuc2V0U3RvcmUoc3RvcmUpO1xuXG5leHBvcnQgY2xhc3MgT0NBbGVydHNQcm92aWRlciBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGNvbnRhaW5lclN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LCAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGNvbnRhaW5lclN0eWxlOiB7fSxcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XG4gICAgICAgIDxPQ0FsZXJ0cyBjb250YWluZXJTdHlsZT17dGhpcy5wcm9wcy5jb250YWluZXJTdHlsZX0gLz5cbiAgICAgIDwvUHJvdmlkZXI+XG4gICAgKTtcbiAgfVxufVxuIl19