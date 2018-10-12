import React from 'react';
import { Button, ButtonToolbar } from 'react-bootstrap';
import { OCAlertsProvider, OCAlert } from '../../../src/index';

function AlertsView() {
  const msgs = {
    info: 'Alert info!',
    success: 'Alert success! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel posuere sapien.',
    warning: 'Alert warning! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel posuere sapien. Sed quis sagittis lorem. Proin eget ultrices orci. Quisque tincidunt mattis magna, vel vehicula elit congue sed.',
    error: 'Alert error! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel posuere sapien. Sed quis sagittis lorem. Proin eget ultrices orci. Quisque tincidunt mattis magna, vel vehicula elit congue sed. Aenean interdum, quam vel molestie tempor, purus erat porttitor nulla, eget accumsan risus lectus sit amet tortor.'
  };
  return (
    <div className="oc-content">
      <h1>Alerts</h1>
      <p>Use alerts for showing semantic notifications to the end user.</p>
      <h2>Usage</h2>
      <p>
        Include single OCAlerts component in main container of the application.
      </p>
      <ButtonToolbar>
        <Button
          bsStyle="info"
          onClick={() => {
            OCAlert.alertInfo(msgs.info);
          }}
        >Info</Button>
        <Button
          bsStyle="success"
          onClick={() => {
            OCAlert.alertSuccess(msgs.success);
          }}
        >Success</Button>
        <Button
          bsStyle="warning"
          onClick={() => {
            OCAlert.alertWarning(msgs.warning);
          }}
        >Warning</Button>
        <Button
          bsStyle="danger"
          onClick={() => {
            OCAlert.alertError(msgs.error);
          }}
        >Error</Button>
      </ButtonToolbar>
      <OCAlertsProvider />
    </div>
  );
}

export default AlertsView;
