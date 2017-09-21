Back to [alerts](../../README.md)

# Alerts API

### Description

React alerts component to show global notifications.

### Initialization

#### Include in the DOM

```jsx
import { OCAlertsProvider } from '@opuscapita/react-alerts';

<div id="myApp">
  <OCAlertsProvider />
</div>
```

### API

#### OCAlert

| Function     | Parameters                               | Returns          | Description |
| ------------ | ---------------------------------------- | ---------------- | ----------- |
| alertSuccess | message, translate = false, values = null) | Alert Id: number |             |
| alertInfo    | message, timeout = null, translate = false, values = null | Alert Id: number |             |
| alertWarning | message, translate = false, values = null | Alert Id: number |             |
| alertError   | message, translate = false, values = null | Alert Id: number |             |
| closeAlert   | id                                       |                  |             |
| closeAlerts  |                                          |                  |             |

### Code example

```jsx
import { OCAlert } from '@opuscapita/react-alerts';

OCAlert.alertSuccess('success');
OCAlert.alertInfo('info');
// Info can have a timeout, after which the alert is closed
OCAlert.alertInfo('info', 1000);
OCAlert.alertWarning('warning');
OCAlert.alertError('error');

// Translated messages, with translations IDs and values for placeholders
const id = OCAlert.alertSuccess('my.id', true, 'John');

OCAlert.closeAlert(id);
OCAlert.closeAlerts();
```