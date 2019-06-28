# Changelog

* In general follow (https://docs.npmjs.com/getting-started/semantic-versioning) versioning.
## <next>
* Fixed: Array of messages line breaks
* Added Storybook implementation

## 3.0.5
* Fix styles according to latest ui specs
* Add left and right margin on small screens
* Increase default timeout from 1.5 seconds to 3 seconds

## 3.0.4
* Upgrade all packages that can be upgraded

## 3.0.3
* Change `div.alert-message-container` to `span.alert-message-container` for test compability
* Move `OCAlertsProvider` store creation to constructor to avoid unnecessary store creation
* Upgrade npm packages

## 3.0.2
* Internet Explorer related style fix

## 3.0.1
* Minor style fixes

## 3.0.0
* Upgrade to new react-component-template
* Remove `react-intl` dependency
* Add support for react component as message
* Change alert actions parameters so that first is the message, second is options object
* Customizable container styles
* Use immutables
* Replace non-unique lodash id to uuid

## 2.0.3
* Update react and react-dom packages

## 2.0.2
* Update @opuscapita/react-icons

## 2.0.1
* Update react-intl and redux packages

## 2.0.0
* Upgrade to react 15.6 & babel-preset-env

## 1.1.1
* Change alertSuccess timeout to 1.5s

## 1.1.0
* Add AlertsProvider

## 1.0.0
* Extracted to own repository from oc-common-ui
