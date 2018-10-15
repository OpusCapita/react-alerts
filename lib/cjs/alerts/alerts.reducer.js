'use strict';

exports.__esModule = true;
exports.alertsReducer = alertsReducer;

var _immutable = require('immutable');

var _alerts = require('./alerts.actions');

var _alerts2 = require('./alerts.constants');

var _alerts3 = _interopRequireDefault(_alerts2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function alertsReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _alerts3.default.alerts;
  var action = arguments[1];

  switch (action.type) {
    case _alerts.TYPES.PLATFORM_ALERTS_SHOW:
      {
        return state.push((0, _immutable.Map)({
          id: action.id,
          type: action.alertType,
          message: action.message
        }));
      }
    case _alerts.TYPES.PLATFORM_ALERTS_DISMISS_ALERT:
      {
        return state.filter(function (note) {
          return note.get('id') !== action.id;
        });
      }
    case _alerts.TYPES.PLATFORM_ALERTS_DISMISS_ALL:
      {
        return (0, _immutable.List)();
      }
    default:
      {
        return state;
      }
  }
} /* eslint-disable import/prefer-default-export */