import React from 'react';
import { Button, ButtonToolbar } from 'react-bootstrap';
import { OCAlert } from '../../src/index';

export default class ComponentView extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }


  render() {
    const msgs = {
      info: 'Alert info!',
      success: 'Alert success! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel posuere sapien.',
      warning: 'Alert warning! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel posuere sapien. Sed quis sagittis lorem. Proin eget ultrices orci. Quisque tincidunt mattis magna, vel vehicula elit congue sed.',
      error: 'Alert error! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel posuere sapien. Sed quis sagittis lorem. Proin eget ultrices orci. Quisque tincidunt mattis magna, vel vehicula elit congue sed. Aenean interdum, quam vel molestie tempor, purus erat porttitor nulla, eget accumsan risus lectus sit amet tortor.',
    };
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
              OCAlert.alertInfo(<span>{msgs.info}</span>);
            }}
          >
            Info
          </Button>
          <Button
            bsStyle="success"
            onClick={() => {
              OCAlert.alertSuccess(msgs.success);
            }}
          >
            Success
          </Button>
          <Button
            bsStyle="warning"
            onClick={() => {
              OCAlert.alertWarning(msgs.warning);
            }}
          >
            Warning
          </Button>
          <Button
            bsStyle="danger"
            onClick={() => {
              OCAlert.alertError(msgs.error);
            }}
          >
            Error
          </Button>
        </ButtonToolbar>
      </div>
    );
  }
}
