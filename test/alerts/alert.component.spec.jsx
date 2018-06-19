/* eslint-disable no-unused-expressions */
import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import { Alert } from 'react-bootstrap';
import sinon from 'sinon';
import { OCAlert } from '../../src/alerts/alert.component';
import { OCAlert as alertAction } from '../../src/alerts/alerts.actions';

describe('Alert component', () => {
  it('should show basic success message', () => {
    const props = {
      id: '1',
      type: 'success',
      message: 'hello!',
      translate: false,
    };
    const wrapper = mount(
      <OCAlert {...props} />,
    );
    const alert = wrapper.find(Alert);
    expect(alert.text()).to.contain('hello!');
    expect(alert.props().bsStyle).to.eql('success');
    expect(alert.props().onDismiss).to.not.be.undefined;

    const closeAlertAction = sinon.stub(alertAction, 'closeAlert');
    wrapper.find('button').at(0).simulate('click');
    expect(closeAlertAction.called).to.be.true;

    closeAlertAction.restore();
  });

  it('should show basic success message from object', () => {
    const props = {
      id: '2',
      type: 'info',
      message: 'message1',
    };
    const wrapper = mount(<OCAlert {...props} />);
    const alert = wrapper.find(Alert);
    expect(alert.text()).to.contain('message1');
    expect(alert.props().bsStyle).to.eql('info');
    expect(alert.props().onDismiss).to.not.be.undefined;
  });
});
