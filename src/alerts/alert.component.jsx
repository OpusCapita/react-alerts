/* eslint-disable import/prefer-default-export */
import React from 'react';
import PropTypes from 'prop-types';
import { Alert } from 'react-bootstrap';
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
    const icons = {
      success: {
        type: 'indicator',
        name: 'ok',
        width: 16,
        height: 16,
        style: {
          marginLeft: '10px',
        },
      },
      info: {
        type: 'product',
        name: 'Info',
        width: 30,
        height: 30,
      },
      warning: {
        type: 'indicator',
        name: 'warning',
        width: 25,
        height: 25,
        style: {
          marginLeft: '5px',
        },
      },
      danger: {
        type: 'indicator',
        name: 'error',
        width: 25,
        height: 25,
        style: {
          marginLeft: '5px',
        },
      },
    };
    return (
      <Icon {...icons[this.props.type]} />
    );
  }

  handleAlertDismiss = () => {
    OCAlertActions.closeAlert(this.props.id);
  };

  render() {
    return (
      <Alert bsStyle={this.props.type} onDismiss={this.handleAlertDismiss}>
        <div className="alert-content">
          <div className="alert-icon-container">{this.getIcon()}</div>
          <span className="alert-message-container">
            { Array.isArray(this.props.message)
              ? this.props.message.map((m) => {
                  if (typeof m === 'string') {
                    return `${m}\n`;
                  }
                  return (
                    <React.Fragment>
                      {m}
                      <br />
                    </React.Fragment>
                  );
                })
              : this.props.message
            }
          </span>
        </div>
      </Alert>);
  }
}
