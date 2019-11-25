/* eslint-disable no-unused-expressions, func-names */
import React from 'react';
import { List, Map } from 'immutable';
import { expect } from 'chai';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';

import { OCAlerts } from '../../src/index';
import { OCAlert } from '../../src/alerts/alert.component';


describe('Alerts component', () => {
  before(function before() {
    const mockStore = configureMockStore();
    this.store = mockStore({
      alerts: List([Map({
        id: 'alert_1',
        type: 'success',
        message: 'my success',
        onDismiss: null,
      })]),
    });
  });

  it('should render correctly', function () {
    const wrapper = mount(<Provider store={this.store}><OCAlerts /></Provider>);
    const alert = wrapper.find(OCAlert);
    expect(alert.props()).to.eql({
      id: 'alert_1',
      type: 'success',
      message: 'my success',
      onDismiss: null,
    });
  });
});
