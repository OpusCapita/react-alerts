# react-alerts

### Description
React alerts component to show global notifications.

### Installation
```
npm install @opuscapita/react-alerts
```

### Demo
View the [DEMO](https://opuscapita.github.io/react-alerts)

### Builds
#### UMD
The default build with compiled styles in the .js file. Also minified version available in the lib/umd directory.
#### CommonJS/ES Module
You need to configure your module loader to use `cjs` or `es` fields of the package.json to use these module types.
Also you need to configure sass loader, since all the styles are in sass format.
* With webpack use [resolve.mainFields](https://webpack.js.org/configuration/resolve/#resolve-mainfields) to configure the module type.
* Add [SASS loader](https://github.com/webpack-contrib/sass-loader) to support importing of SASS styles.

### API
#### OCAlertsProvider
| Prop name      | Type   | Default                              | Description                           |
| -------------- | ------ | ------------------------------------ | --------------------------------------|
| containerStyle | object | { bottom: '5px', maxWidth: '650px' } | Override container default CSS styles |

#### OCAlerts
| Prop name      | Type   | Default                              | Description                           |
| -------------- | ------ | ------------------------------------ | --------------------------------------|
| containerStyle | object | { bottom: '5px', maxWidth: '650px' } | Override container default CSS styles |

#### OCAlert
| Function     | Parameters                  | Returns          | Description             |
| ------------ | --------------------------- | ---------------- | ----------------------- |
| alertSuccess | message, options, onDismiss | Alert Id: number | Show success alert      |
| alertInfo    | message, options, onDismiss | Alert Id: number | Show info alert         |
| alertWarning | message, options, onDismiss | Alert Id: number | Show warning alert      |
| alertError   | message, options, onDismiss | Alert Id: number | Show error alert        |
| closeAlert   | id                          |                  | Close one alert with id |
| closeAlerts  |                             |                  | Close all alerts        |

#### Options
| Attributes | Description                                                      |
| ---------- | ---------------------------------------------------------------- |
| timeOut    | Time in milliseconds in which the alert is closed automatically. |

### Code example
#### Simple usage with built-in Redux store
Include the `OCAlertsProvider` component somewhere in your main component once.
```jsx
import { OCAlertsProvider } from '@opuscapita/react-alerts';

<div id="myApp">
  <OCAlertsProvider />
</div>
```

Use alerts anywhere in your application.
```javascript
import { OCAlert } from '@opuscapita/react-alerts';

// Message can be text or an react element
OCAlert.alertSuccess('The operation was success!');
OCAlert.alertInfo('Click the button to continue.');
OCAlert.alertWarning('Make sure you save the changes before leaving.');
OCAlert.alertError('Something went wrong.');
OCAlert.alertSuccess(<FormattedMessage id="AlertSuccess" />);
// Alerts can have custom timeout, after which the alert is closed
OCAlert.alertInfo('Alert will disappear in 3 seconds', { timeOut: 3000 });

OCAlert.closeAlert(id);
OCAlert.closeAlerts();
```

#### Usage with your own Redux store
Instead of using react-alerts' built-in Redux store, you can also use your own store. Like this:

```javascript
import { OCAlert } from '@opuscapita/react-alerts';
OCAlert.setStore(yourStore)
```

After this you need to include OCAlerts component somewhere in your application (Note that we're 
not using the OCAlertsProvider like we did in the previous example)

```javascript
import { OCAlerts } from '@opuscapita/react-alerts';

// ...

<div className="my-react-application">
  {this.props.children}
  <OCAlerts />
</div>
```

And lastly, you need to import and initialize the alertsReducer:

```javascript
import { alertsReducer } from '@opuscapita/react-alerts';
import { combineReducers } from 'redux';

const combinedReducers = {
  // your reducers
  alerts: alertsReducer,
}
```
