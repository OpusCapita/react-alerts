import React from 'react';
import { storiesOf } from '@storybook/react';
import { number, text } from '@storybook/addon-knobs';
import { Button } from 'react-bootstrap';
// Application
import './scss/app.component.scss';
import { OCAlertsProvider, OCAlert } from '../src/alerts';
/* eslint-disable no-alert */
/* eslint-disable no-console */

storiesOf('@opuscapita/react-alerts', module)
  .add('React Alerts', () => {
    const knobs = {
      successText: text('Success text', 'Success!'),
      infoText: text('Info text', 'Info!'),
      errorText: text('Error text', 'Error!'),
      warningText: text('Warning text', 'Warning!'),
      successTimeout: number('Success message timeout (ms)', 3000),
      infoTimeout: number('Info message timeout (ms)', 3000),
      errorTimeout: number('Error message timeout (ms)', undefined),
      warningTimeout: number('Warning message timeout (ms)', undefined),
    };

    const onButtonClick = (e) => {
      switch (e.target.id) {
        case 'success':
          return OCAlert.alertSuccess(knobs.successText, { timeOut: knobs.successTimeout });
        case 'error':
          return OCAlert.alertError(knobs.errorText, { timeOut: knobs.errorTimeout });
        case 'warning':
          return OCAlert.alertWarning(knobs.warningText, { timeOut: knobs.warningTimeout });
        default:
          return OCAlert.alertInfo(knobs.infoText, { timeOut: knobs.infoTimeout });
      }
    };

    return (
      <div className="alerts-demo">
        <Button className="btn" id="success" onClick={onButtonClick}>Fire Success Alert!</Button>
        <Button className="btn" id="info" onClick={onButtonClick}>Fire Info Alert!</Button>
        <Button className="btn" id="error" onClick={onButtonClick}>Fire Error Alert!</Button>
        <Button className="btn" id="warning" onClick={onButtonClick}>Fire Warning Alert!</Button>
        <OCAlertsProvider />
      </div>
    );
  });
