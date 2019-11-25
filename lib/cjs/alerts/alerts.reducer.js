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
          message: action.message,
          onDismiss: action.onDismiss
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hbGVydHMvYWxlcnRzLnJlZHVjZXIuanMiXSwibmFtZXMiOlsiYWxlcnRzUmVkdWNlciIsInN0YXRlIiwiSU5JVElBTF9TVEFURSIsImFsZXJ0cyIsImFjdGlvbiIsInR5cGUiLCJUWVBFUyIsIlBMQVRGT1JNX0FMRVJUU19TSE9XIiwicHVzaCIsImlkIiwiYWxlcnRUeXBlIiwibWVzc2FnZSIsIm9uRGlzbWlzcyIsIlBMQVRGT1JNX0FMRVJUU19ESVNNSVNTX0FMRVJUIiwiZmlsdGVyIiwibm90ZSIsImdldCIsIlBMQVRGT1JNX0FMRVJUU19ESVNNSVNTX0FMTCJdLCJtYXBwaW5ncyI6Ijs7O1FBS2dCQSxhLEdBQUFBLGE7O0FBSmhCOztBQUNBOztBQUNBOzs7Ozs7QUFFTyxTQUFTQSxhQUFULEdBQTZEO0FBQUEsTUFBdENDLEtBQXNDLHVFQUE5QkMsaUJBQWNDLE1BQWdCO0FBQUEsTUFBUkMsTUFBUTs7QUFDbEUsVUFBUUEsT0FBT0MsSUFBZjtBQUNFLFNBQUtDLGNBQU1DLG9CQUFYO0FBQWlDO0FBQy9CLGVBQU9OLE1BQU1PLElBQU4sQ0FBVyxvQkFBSTtBQUNwQkMsY0FBSUwsT0FBT0ssRUFEUztBQUVwQkosZ0JBQU1ELE9BQU9NLFNBRk87QUFHcEJDLG1CQUFTUCxPQUFPTyxPQUhJO0FBSXBCQyxxQkFBV1IsT0FBT1E7QUFKRSxTQUFKLENBQVgsQ0FBUDtBQU1EO0FBQ0QsU0FBS04sY0FBTU8sNkJBQVg7QUFBMEM7QUFDeEMsZUFBT1osTUFBTWEsTUFBTixDQUFhO0FBQUEsaUJBQVFDLEtBQUtDLEdBQUwsQ0FBUyxJQUFULE1BQW1CWixPQUFPSyxFQUFsQztBQUFBLFNBQWIsQ0FBUDtBQUNEO0FBQ0QsU0FBS0gsY0FBTVcsMkJBQVg7QUFBd0M7QUFDdEMsZUFBTyxzQkFBUDtBQUNEO0FBQ0Q7QUFBUztBQUNQLGVBQU9oQixLQUFQO0FBQ0Q7QUFqQkg7QUFtQkQsQyxDQXpCRCIsImZpbGUiOiJhbGVydHMucmVkdWNlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9wcmVmZXItZGVmYXVsdC1leHBvcnQgKi9cbmltcG9ydCB7IExpc3QsIE1hcCB9IGZyb20gJ2ltbXV0YWJsZSc7XG5pbXBvcnQgeyBUWVBFUyB9IGZyb20gJy4vYWxlcnRzLmFjdGlvbnMnO1xuaW1wb3J0IElOSVRJQUxfU1RBVEUgZnJvbSAnLi9hbGVydHMuY29uc3RhbnRzJztcblxuZXhwb3J0IGZ1bmN0aW9uIGFsZXJ0c1JlZHVjZXIoc3RhdGUgPSBJTklUSUFMX1NUQVRFLmFsZXJ0cywgYWN0aW9uKSB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIFRZUEVTLlBMQVRGT1JNX0FMRVJUU19TSE9XOiB7XG4gICAgICByZXR1cm4gc3RhdGUucHVzaChNYXAoe1xuICAgICAgICBpZDogYWN0aW9uLmlkLFxuICAgICAgICB0eXBlOiBhY3Rpb24uYWxlcnRUeXBlLFxuICAgICAgICBtZXNzYWdlOiBhY3Rpb24ubWVzc2FnZSxcbiAgICAgICAgb25EaXNtaXNzOiBhY3Rpb24ub25EaXNtaXNzLFxuICAgICAgfSkpO1xuICAgIH1cbiAgICBjYXNlIFRZUEVTLlBMQVRGT1JNX0FMRVJUU19ESVNNSVNTX0FMRVJUOiB7XG4gICAgICByZXR1cm4gc3RhdGUuZmlsdGVyKG5vdGUgPT4gbm90ZS5nZXQoJ2lkJykgIT09IGFjdGlvbi5pZCk7XG4gICAgfVxuICAgIGNhc2UgVFlQRVMuUExBVEZPUk1fQUxFUlRTX0RJU01JU1NfQUxMOiB7XG4gICAgICByZXR1cm4gTGlzdCgpO1xuICAgIH1cbiAgICBkZWZhdWx0OiB7XG4gICAgICByZXR1cm4gc3RhdGU7XG4gICAgfVxuICB9XG59XG4iXX0=