/* eslint-disable no-unused-expressions, func-names */
import { expect } from 'chai';
import configureStore from 'redux-mock-store';
import { OCAlert } from '../../src/index';

describe('Alert actions', () => {
  const middlewares = [];
  const mockStore = configureStore(middlewares);

  before(function before() {
    this.store = mockStore();
    OCAlert.setStore(this.store);
  });

  afterEach(function afterEach() {
    this.store.clearActions();
  });

  it('send alertSuccess action', function () {
    const id = OCAlert.alertSuccess('my success');

    const expectedAction = {
      id,
      type: 'PLATFORM_ALERTS_SHOW',
      alertType: 'success',
      message: 'my success',
    };

    expect(this.store.getActions()[0]).to.eql(expectedAction);
  });

  it('send alertInfo action', function () {
    const id = OCAlert.alertInfo('my info');

    const expectedAction = {
      id,
      type: 'PLATFORM_ALERTS_SHOW',
      alertType: 'info',
      message: 'my info',
    };

    expect(this.store.getActions()[0]).to.eql(expectedAction);
  });

  it('send alertWarning action', function () {
    const id = OCAlert.alertWarning('my warning');

    const expectedAction = {
      id,
      type: 'PLATFORM_ALERTS_SHOW',
      alertType: 'warning',
      message: 'my warning',
    };

    expect(this.store.getActions()[0]).to.eql(expectedAction);
  });

  it('send alertError action', function () {
    const id = OCAlert.alertError('my error');

    const expectedAction = {
      id,
      type: 'PLATFORM_ALERTS_SHOW',
      alertType: 'danger',
      message: 'my error',
    };

    expect(this.store.getActions()[0]).to.eql(expectedAction);
  });

  it('send closeAlert action', function () {
    OCAlert.closeAlert('alert_1');

    const expectedAction = {
      id: 'alert_1',
      type: 'PLATFORM_ALERTS_DISMISS_ALERT',
    };

    expect(this.store.getActions()[0]).to.eql(expectedAction);
  });

  it('send closeAlerts action', function () {
    OCAlert.closeAlerts();

    const expectedAction = {
      type: 'PLATFORM_ALERTS_DISMISS_ALL',
    };

    expect(this.store.getActions()[0]).to.eql(expectedAction);
  });
});
