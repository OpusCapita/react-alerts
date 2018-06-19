import React from 'react';
import { Button, ButtonToolbar } from 'react-bootstrap';
import { OCAlert } from '../../src/index';

export default class ComponentView extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div style={{ padding: '20px' }}>
        <h1>Alerts</h1>
        <p>Use alerts for showing semantic notifications to the end user.</p>
        <h2>Usage</h2>
        <p>
          Include single OCAlertsProvider component in the main container of the application.
          Then call actions in OCAlert component to show global alerts in your application.
        </p>
        <ButtonToolbar>
          <Button
            bsStyle="info"
            onClick={() => {
              OCAlert.alertInfo(<span>This is the info text.</span>);
            }}
          >
            Info
          </Button>
          <Button
            bsStyle="success"
            onClick={() => {
              OCAlert.alertSuccess('alert success!');
            }}
          >
            Success
          </Button>
          <Button
            bsStyle="warning"
            onClick={() => {
              OCAlert.alertWarning('alert warning!');
            }}
          >
            Warning
          </Button>
          <Button
            bsStyle="danger"
            onClick={() => {
              OCAlert.alertError('alert error!');
            }}
          >
            Error
          </Button>
        </ButtonToolbar>
      </div>
    );
  }
}
