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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hbGVydHMvYWxlcnRzLnJlZHVjZXIuanMiXSwibmFtZXMiOlsiYWxlcnRzUmVkdWNlciIsInN0YXRlIiwiSU5JVElBTF9TVEFURSIsImFsZXJ0cyIsImFjdGlvbiIsInR5cGUiLCJUWVBFUyIsIlBMQVRGT1JNX0FMRVJUU19TSE9XIiwicHVzaCIsImlkIiwiYWxlcnRUeXBlIiwibWVzc2FnZSIsIlBMQVRGT1JNX0FMRVJUU19ESVNNSVNTX0FMRVJUIiwiZmlsdGVyIiwibm90ZSIsImdldCIsIlBMQVRGT1JNX0FMRVJUU19ESVNNSVNTX0FMTCJdLCJtYXBwaW5ncyI6Ijs7O1FBS2dCQSxhLEdBQUFBLGE7O0FBSmhCOztBQUNBOztBQUNBOzs7Ozs7QUFFTyxTQUFTQSxhQUFULEdBQTZEO0FBQUEsTUFBdENDLEtBQXNDLHVFQUE5QkMsaUJBQWNDLE1BQWdCO0FBQUEsTUFBUkMsTUFBUTs7QUFDbEUsVUFBUUEsT0FBT0MsSUFBZjtBQUNFLFNBQUtDLGNBQU1DLG9CQUFYO0FBQWlDO0FBQy9CLGVBQU9OLE1BQU1PLElBQU4sQ0FBVyxvQkFBSTtBQUNwQkMsY0FBSUwsT0FBT0ssRUFEUztBQUVwQkosZ0JBQU1ELE9BQU9NLFNBRk87QUFHcEJDLG1CQUFTUCxPQUFPTztBQUhJLFNBQUosQ0FBWCxDQUFQO0FBS0Q7QUFDRCxTQUFLTCxjQUFNTSw2QkFBWDtBQUEwQztBQUN4QyxlQUFPWCxNQUFNWSxNQUFOLENBQWE7QUFBQSxpQkFBUUMsS0FBS0MsR0FBTCxDQUFTLElBQVQsTUFBbUJYLE9BQU9LLEVBQWxDO0FBQUEsU0FBYixDQUFQO0FBQ0Q7QUFDRCxTQUFLSCxjQUFNVSwyQkFBWDtBQUF3QztBQUN0QyxlQUFPLHNCQUFQO0FBQ0Q7QUFDRDtBQUFTO0FBQ1AsZUFBT2YsS0FBUDtBQUNEO0FBaEJIO0FBa0JELEMsQ0F4QkQiLCJmaWxlIjoiYWxlcnRzLnJlZHVjZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvcHJlZmVyLWRlZmF1bHQtZXhwb3J0ICovXG5pbXBvcnQgeyBMaXN0LCBNYXAgfSBmcm9tICdpbW11dGFibGUnO1xuaW1wb3J0IHsgVFlQRVMgfSBmcm9tICcuL2FsZXJ0cy5hY3Rpb25zJztcbmltcG9ydCBJTklUSUFMX1NUQVRFIGZyb20gJy4vYWxlcnRzLmNvbnN0YW50cyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBhbGVydHNSZWR1Y2VyKHN0YXRlID0gSU5JVElBTF9TVEFURS5hbGVydHMsIGFjdGlvbikge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBUWVBFUy5QTEFURk9STV9BTEVSVFNfU0hPVzoge1xuICAgICAgcmV0dXJuIHN0YXRlLnB1c2goTWFwKHtcbiAgICAgICAgaWQ6IGFjdGlvbi5pZCxcbiAgICAgICAgdHlwZTogYWN0aW9uLmFsZXJ0VHlwZSxcbiAgICAgICAgbWVzc2FnZTogYWN0aW9uLm1lc3NhZ2UsXG4gICAgICB9KSk7XG4gICAgfVxuICAgIGNhc2UgVFlQRVMuUExBVEZPUk1fQUxFUlRTX0RJU01JU1NfQUxFUlQ6IHtcbiAgICAgIHJldHVybiBzdGF0ZS5maWx0ZXIobm90ZSA9PiBub3RlLmdldCgnaWQnKSAhPT0gYWN0aW9uLmlkKTtcbiAgICB9XG4gICAgY2FzZSBUWVBFUy5QTEFURk9STV9BTEVSVFNfRElTTUlTU19BTEw6IHtcbiAgICAgIHJldHVybiBMaXN0KCk7XG4gICAgfVxuICAgIGRlZmF1bHQ6IHtcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==