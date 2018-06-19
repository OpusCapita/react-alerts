/* eslint-disable import/prefer-default-export */
import React from 'react';
import PropTypes from 'prop-types';
import { Alert as BSAlert } from 'react-bootstrap';
import { Icon } from '@opuscapita/react-icons';
import { OCAlert as OCAlertActions } from './alerts.actions';

export class OCAlert extends React.PureComponent {
  static propTypes = {
    id: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['success', 'info', 'warning', 'danger']).isRequired,
    message: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.node,
    ]).isRequired,
  };

  getIcon() {
    const names = {
      success: 'ok',
      info: 'exclamation',
      warning: 'alert',
      danger: 'error',
    };
    return (
      <Icon
        type="indicator"
        name={names[this.props.type]}
        width={38}
        height={38}
      />
    );
  }

  handleAlertDismiss = () => {
    OCAlertActions.closeAlert(this.props.id);
  }

  render() {
    return (
      <BSAlert bsStyle={this.props.type} onDismiss={this.handleAlertDismiss}>
        <div className="alert-content">
          { this.getIcon() }
          <span>{ this.props.message }</span>
        </div>
      </BSAlert>);
  }
}
