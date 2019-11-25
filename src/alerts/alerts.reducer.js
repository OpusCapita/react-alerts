/* eslint-disable import/prefer-default-export */
import { List, Map } from 'immutable';
import { TYPES } from './alerts.actions';
import INITIAL_STATE from './alerts.constants';

export function alertsReducer(state = INITIAL_STATE.alerts, action) {
  switch (action.type) {
    case TYPES.PLATFORM_ALERTS_SHOW: {
      return state.push(Map({
        id: action.id,
        type: action.alertType,
        message: action.message,
        onDismiss: action.onDismiss,
      }));
    }
    case TYPES.PLATFORM_ALERTS_DISMISS_ALERT: {
      return state.filter(note => note.get('id') !== action.id);
    }
    case TYPES.PLATFORM_ALERTS_DISMISS_ALL: {
      return List();
    }
    default: {
      return state;
    }
  }
}
