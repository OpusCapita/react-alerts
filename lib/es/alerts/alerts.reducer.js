/* eslint-disable import/prefer-default-export */
import { List, Map } from 'immutable';
import { TYPES } from './alerts.actions';
import INITIAL_STATE from './alerts.constants';

export function alertsReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE.alerts;
  var action = arguments[1];

  switch (action.type) {
    case TYPES.PLATFORM_ALERTS_SHOW:
      {
        return state.push(Map({
          id: action.id,
          type: action.alertType,
          message: action.message
        }));
      }
    case TYPES.PLATFORM_ALERTS_DISMISS_ALERT:
      {
        return state.filter(function (note) {
          return note.get('id') !== action.id;
        });
      }
    case TYPES.PLATFORM_ALERTS_DISMISS_ALL:
      {
        return List();
      }
    default:
      {
        return state;
      }
  }
}