/* eslint-disable no-unused-expressions */
import { expect } from 'chai';
import { List, Map } from 'immutable';
import { alertsReducer } from '../../src/index';
import { TYPES } from '../../src/alerts/alerts.actions';

describe('Alerts reducer', () => {
  it('should handle show action', () => {
    const action = {
      id: 'alert_1',
      type: TYPES.PLATFORM_ALERTS_SHOW,
      alertType: 'success',
      message: 'my success',
      onDismiss: null,
    };

    let newState = alertsReducer(List(), action);

    expect(newState.get(0)).to.eql(Map({
      id: 'alert_1',
      type: 'success',
      message: 'my success',
      onDismiss: null,
    }));

    newState = alertsReducer(newState, action);
    expect(newState.size).to.eql(2);
  });

  it('should handle dismiss alert action', () => {
    const initialState = List([Map({
      id: 'alert_1',
      type: TYPES.PLATFORM_ALERTS_SHOW,
      alertType: 'success',
      message: 'my success',
    })]);

    const action = {
      type: TYPES.PLATFORM_ALERTS_DISMISS_ALERT,
      id: 'alert_1',
    };

    const newState = alertsReducer(initialState, action);
    expect(newState.size).to.eql(0);
  });

  it('should handle dismiss all alerts action', () => {
    const initialState = List([Map({
      id: 'alert_1',
      type: TYPES.PLATFORM_ALERTS_SHOW,
      alertType: 'success',
      message: 'my success',
      onDismiss: null,
    }), Map({
      id: 'alert_2',
      type: TYPES.PLATFORM_ALERTS_SHOW,
      alertType: 'success',
      message: 'my success',
      onDismiss: null,
    })]);

    const action = {
      type: TYPES.PLATFORM_ALERTS_DISMISS_ALL,
    };

    const newState = alertsReducer(initialState, action);
    expect(newState.size).to.eql(0);
  });
});
